export default [
  {
    path: "/tableLayout",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "tableLayout:list"
    },
    children: [
      {
        path: "list",
        name: "tableLayoutList",
        component: () =>
          import(/*webpackChunkName:"layout"*/ "@/views/layout/tableLayout"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "tableLayout:list",
          links: ["表格布局"]
        }
      }
    ]
  },
  {
    path: "/formLayout",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "formLayout:list"
    },
    children: [
      {
        path: "list",
        name: "formLayoutList",
        component: () =>
          import(/*webpackChunkName:"layout"*/ "@/views/layout/formLayout"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "formLayout:list",
          links: ["表单布局"]
        }
      }
    ]
  },
  {
    path: "/treeLayout",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "treeLayout:list"
    },
    children: [
      {
        path: "list",
        name: "treeLayoutList",
        component: () =>
          import(/*webpackChunkName:"layout"*/ "@/views/layout/treeLayout"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "treeLayout:list",
          links: ["tree布局"]
        }
      }
    ]
  },
  {
    path: "/tabLayout",
    component: { render: h => h("router-view") },
    meta: {
      functionAuth: "tabLayout:list"
    },
    children: [
      {
        path: "list",
        name: "tabLayoutList",
        component: () =>
          import(/*webpackChunkName:"layout"*/ "@/views/layout/tabLayout"),
        meta: {
          isTab: true,
          keepAlive: false,
          functionAuth: "tabLayout:list",
          links: ["tab布局"]
        }
      }
    ]
  }
];
