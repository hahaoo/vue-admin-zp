export default [
  {
    path: "/userSetting",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "userSetting:list"
    },
    children: [
      {
        path: "list",
        name: "userSettingList",
        component: () =>
          import(
            /*webpackChunkName:"userCenter"*/ "@/views/userCenter/userSetting"
          ),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "userSetting:list",
          links: ["个人设置"]
        }
      }
    ]
  },
  {
    path: "/userInfo",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "userInfo:list"
    },
    children: [
      {
        path: "list",
        name: "userInfoList",
        component: () =>
          import(
            /*webpackChunkName:"userCenter"*/ "@/views/userCenter/userInfo"
          ),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "userInfo:list",
          links: ["个人信息"]
        }
      }
    ]
  }
];
