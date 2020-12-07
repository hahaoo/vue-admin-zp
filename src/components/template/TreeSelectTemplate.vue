<!-- 左树右Table -->
<template>
  <el-container class="tree-search-list-wrapper">
    <el-aside width="280px" class="tree-left-content">
      <el-main class="inner-content">
        <slot name="treeAside"></slot>
      </el-main>
    </el-aside>

    <el-container class="tree-right-content">
      <el-main style="padding:0px;height:100%" class="tree-right-contentbg">
        <!-- <div class="header-content">
          <div class="title-block">
            <slot name="TreeBreadcrumb"></slot>
          </div>
        </div> -->
        <div class="table-content">
          <slot name="treeSearchContent"></slot>
          <div class="btn-block">
            <div class="left-txt">
              <span class="left-txt-title">{{ tableTitleTxt }}</span>
              <slot name="treeSearchBtnLeft"></slot>
            </div>
            <div class="right-txt">
              <slot name="treeSearchBtnRight"></slot>
            </div>
          </div>
          <slot name="treeTableContent"></slot>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    tableTitleTxt: {
      type: String,
      default: "信息列表"
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.tree-search-list-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .el-tree--highlight-current
    .el-tree-node.is-current
    > .el-tree-node__content {
    color: #519eff;
  }
  .stateClass {
    padding: 3px !important;
    border-radius: 100% !important;
    vertical-align: middle;
    margin: 0 5px;
  }

  .tree-left-content {
    height: 100%;
    border: 1px solid rgb(233, 233, 233);
    background-color: #fff;
    .inner-content {
      height: 100%;
      padding: 15px 20px;
      background-color: #fff !important;

      .el-tree {
        height: 100%;
        overflow: hidden;

        margin-top: 15px;
        .custom-tree-node {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          padding-right: 8px;
          display: inline-block;
          white-space: nowrap;
          /* width: 50px; */
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .tree-right-content {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border: 1px solid rgb(233, 233, 233);
    margin: 0 0 0 15px;
    padding: 0;
    .tree-right-contentbg {
      background-color: #fff !important;
    }
    .header-content {
      height: auto !important;
      padding: 0;
      .title-block {
        padding: 18px;
        border-bottom: 1px solid rgb(233, 233, 233);
      }
    }

    .table-content {
      padding: 20px;
      // height: 100%;
      overflow: hidden;
      .btn-block {
        display: flex;
        color: #666;
        background: #ebeef5;
        padding: 8px 15px;

        .left-txt,
        .right-txt {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          font-weight: 650;
          font-size: 14px;
          line-height: 30px;
        }

        .right-txt {
          text-align: right;
        }
        .left-txt-title {
          margin-right: 15px;
        }
      }
    }
  }
}
</style>
