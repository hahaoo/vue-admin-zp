import axios from "axios";
import { rootPath } from "@/config/globalParam";
import router from "@/router/index.js";
import { Notification, Message } from "element-ui";
import { AccessTokenRefreshApi } from "@/api/index";

let refreshing = false; //是否正在刷新token中
let waitingForRefresh = []; //等待刷新地址

const Axios = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: rootPath,
  timeout: 100000,
  responseType: "json",
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
});

//刷新token登录令牌接口
async function refreshToken() {
  let refresh = sessionStorage.getItem("refreshToken");
  refreshing = true;
  let res = await AccessTokenRefreshApi({ refreshToken: refresh });
  refreshing = false;
  if (res.status == 1) {
    sessionStorage.setItem("token", res.data.authorization);
    sessionStorage.setItem("refreshToken", res.data.refreshToken);
  }
}

//status 0  后端接口返回错误
//如果返回的数据不符合规范，没有msg消息提示，
//不使用error（error会有大段SQL之类的错误） 前端就直接提示系统错误
// 根据错误信息的长度来控制显示时间长短
function status0(msg) {
  if (msg.length > 15 && msg.length < 20) {
    Message.error({
      message: msg,
      duration: 6000
    });
  } else if (msg.length >= 20) {
    Message.error({
      message: msg,
      duration: 0,
      showClose: true
    });
  } else {
    msg ? Message.error(msg) : Message.error("服务器发生错误[NO Message]");
  }
}

//status 2  后端接口返回token过期
//缓存当时的请求，刷新token，然后重新再请求
async function status2(res) {
  //refresh接口也过期就直接去登录
  if (res.config.url === "/la-api/accessToken/refresh") {
    refreshing = false; //重置状态数据
    waitingForRefresh = []; //等待刷新地址
    //情况缓存，去登录
    sessionStorage.clear();
    localStorage.clear();
    router.replace("/login");
  } else {
    const resolveQueue = new Promise(resolve => {
      // 将resolve放进队列，用一个函数形式来保存，等token刷新后直接执行
      waitingForRefresh.push(() => {
        res.config.baseURL = "";
        resolve(Axios(res.config));
      });
    });
    //刷新token
    if (!refreshing) {
      await refreshToken();
      // 已经刷新了token，将所有队列中的请求进行重试
      waitingForRefresh.forEach(cb => cb());
      waitingForRefresh = [];
    }
    // 正在刷新token，将返回一个未执行resolve的promise
    return resolveQueue;
  }
}

//如果请求头是"Content-Type": "multipart/form-data",
//处理文件上传 使用FormData处理 Blob, File，string类型
// function paramsToFormData(params) {
//   let fd = new FormData();
//   for (let o in params) {
//     if (o == "file" && _.isArray(params[o])) {
//       for (let index = 0; index < params[o].length; index++) {
//         fd.append(o, params[o][index]);
//       }
//     } else {
//       fd.append(o, params[o]);
//     }
//   }
//   return fd;
// }

//下载功能
// function downloadFile(data, fileName) {
//   const blob = new Blob([data]);
//   if (
//     "download" in document.createElement("a") &&
//     typeof window.navigator.msSaveBlob === "undefined"
//   ) {
//     // 非IE下载
//     const elink = document.createElement("a");
//     elink.download = fileName;
//     elink.style.display = "none";
//     elink.href = URL.createObjectURL(blob);
//     document.body.appendChild(elink);
//     elink.click();
//     URL.revokeObjectURL(elink.href); // 释放URL 对象
//     document.body.removeChild(elink);
//   } else {
//     // IE10+下载 IE & Edge
//     navigator.msSaveBlob(blob, fileName);
//   }
// }

//添加请求拦截器
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers.Authorization = "Bearer " + sessionStorage.getItem("token");
    return config;
  },
  error => {
    // error 的回调信息
    // console.log("request：error", error);
    return Promise.reject(error.data.error.message);
  }
);

//返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    // console.log("response：res", res);
    //对响应数据做些事 200 status 业务状态统一处理，其他返回业务
    //0 错误状态 后端统一给出错误信息
    //1 业务正常状态 前端根据这个状态处理后续页面
    //2 token过期，未登录情况
    if (res.data.status == "2") {
      return status2(res);
    }
    if (res.data.status == "0") {
      status0(res.data.msg);
    }
    return res.data;
  },
  error => {
    // console.log("error: ", error);
    //服务器状态码不是200的情况
    //处理400 404 500之类
    if (error.response.status == "500") {
      Notification.error({
        title: "服务器发生错误[500]",
        message: "请重新请求,或者联系管理员",
        duration: 3000
      });
    }
    if (error.response.status == "502") {
      Notification.error({
        title: "服务器发生错误[502]",
        message: "请重新请求,或者联系管理员",
        duration: 3000
      });
    }
    if (error.response.status == "404") {
      Notification.error({
        title: "服务器发生错误[404]",
        message: "请求不存在,请联系管理员",
        duration: 3000
      });
    }
    if (error.response.status == "400") {
      Notification.error({
        title: "服务器发生错误[400]",
        message: "请重新请求,或者联系管理员",
        duration: 3000
      });
    }

    return Promise.reject(error.response.status);
  }
);

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
/* eslint-disable */
export default {
  Axios,
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, "$http", { value: Axios });
  }
};
