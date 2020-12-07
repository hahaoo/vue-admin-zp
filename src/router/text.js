export default [
  {
    path: "/basicTable",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "basicTable:list"
    },
    children: [
      {
        path: "tableTemplateOne",
        component: { render: h => h("router-view") },
        meta: {
          functionAuth: "tableTemplateOne:list"
        },
        children: [
          {
            path: "list",
            name: "basicTableTemplateOneList",
            component: () =>
              import(
                /* webpackChunkName: "table" */ "@/views/table/tableTemplateOne"
              ),
            meta: {
              isTab: true,
              keepAlive: false,
              functionAuth: "tableTemplateOne:list",
              links: ["表格模板1"]
            }
          }
        ]
      },
      {
        path: "tableTemplateTwo",
        component: { render: h => h("router-view") },
        meta: {
          functionAuth: "tableTemplateTwo:list"
        },
        children: [
          {
            path: "list",
            name: "basicTableTemplateTwoList",
            component: () =>
              import(
                /* webpackChunkName: "table" */ "@/views/table/tableTemplateTwo"
              ),
            meta: {
              isTab: true,
              keepAlive: false,
              functionAuth: "tableTemplateTwo:list",
              links: ["表格模板2"]
            }
          }
        ]
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
          import(/* webpackChunkName: "table" */ "@/views/table/advancedTable"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "advancedTable:list",
          links: ["高级表格"]
        }
      },
      {
        path: "add",
        name: "advancedTableAdd",
        component: () =>
          import(/* webpackChunkName: "table" */ "@/views/table/addTable"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "advancedTable:add",
          links: ["新增高级表格"]
        }
      }
    ]
  }
];
