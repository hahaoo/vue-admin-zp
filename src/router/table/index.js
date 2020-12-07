export default [
  {
    path: "/basicTable",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "basicTable:list"
    },
    children: [
      {
        path: "list",
        name: "basicTableList",
        component: () =>
          import(/*webpackChunkName:"table"*/ "@/views/table/basicTable"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "basicTable:list",
          links: ["基础表格"]
        }
      }
    ]
  },

  {
    path: "/advancedTable",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "advancedTable:list"
    },
    children: [
      {
        path: "list",
        name: "advancedTableList",
        component: () =>
          import(/*webpackChunkName:"table"*/ "@/views/table/advancedTable"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "advancedTable:list",
          links: ["高级表格"]
        }
      }
      // {
      //   path: "add",
      //   name: "advancedTableAdd",
      //   component: () =>
      //     import(/*webpackChunkName:"table"*/ "@/views/table/addTable"),
      //   meta: {
      //     isTab: true,
      //     keepAlive: false,
      //     functionAuth: "advancedTable:add",
      //     links: ["新增高级表格"]
      //   }
      // }
    ]
  }
];
