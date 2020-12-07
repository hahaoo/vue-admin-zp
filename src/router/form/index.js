export default [
  {
    path: "/basicForm",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "basicForm:list"
    },
    children: [
      {
        path: "list",
        name: "basicFormList",
        component: () =>
          import(/* webpackChunkName: "form" */ "@/views/form/basicForm"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "basicForm:list",
          links: ["基础表单"]
        }
      }
      // {
      //   path: "add",
      //   name: "basicFormAdd",
      //   component: () =>
      //     import(/* webpackChunkName: "form" */ "@/views/form/addForm"),
      //   meta: {
      //     isTab: true,
      //     keepAlive: false,
      //     functionAuth: "basicForm:add",
      //     links: ["新增基础表单"]
      //   }
      // }
    ]
  },
  {
    path: "/stepForm",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "stepForm:list"
    },
    children: [
      {
        path: "list",
        name: "stepFormList",
        component: () =>
          import(/* webpackChunkName: "form" */ "@/views/form/stepForm"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "stepForm:list",
          links: ["分步表单"]
        }
      }
    ]
  }
];
