import http from "@/utils/httpService";

//正常网络请求
export const requestApi = data => http.Axios.post("xx/xxx", data);
//文件下载请求
export const requestFileExportApi = data =>
  http.Axios.post("xx/xxx", data, { responseType: "blob" });
//文件上传请求
export const requestFileImportApi = data =>
  http.Axios.post("xx/xxx", data, {
    headers: { "Content-Type": "multipart/form-data" }
  });

//用户登录
export const loginApi = data => http.Axios.post("/login", data);

//用户菜单权限
export const authApi = data => http.Axios.post("/auth", data);

//用户登出
export const logoutApi = data => http.Axios.post("/logout", data);
