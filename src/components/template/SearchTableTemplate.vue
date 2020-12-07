<template>
  <div id="search-table-wrapper">
    <div v-if="isShowHeader" class="search-header">
      <div class="search-title">
        <span class="left-txt">筛选条件</span>
        <span class="right-txt">
          <slot name="headerTitleRight"></slot>
        </span>
      </div>
      <div class="header-content">
        <slot name="headerContent"></slot>
      </div>
    </div>

    <div class="search-content">
      <div class="search-title">
        <span class="left-txt">{{ tableTitleTxt }}</span>
        <span class="right-txt">
          <slot name="tableTitleRight"></slot>
        </span>
      </div>
      <div class="table-content ">
        <slot name="tableContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    tableTitleTxt: {
      type: String,
      default: "信息列表"
    },
    isShowHeader: {
      type: Boolean,
      default: true
    }
  },
  components: {}
};
</script>

<style lang="less">
//公共搜索页面模板，上面搜索，下面table
#search-table-wrapper {
  .stateClass {
    padding: 3px !important;
    border-radius: 100% !important;
    vertical-align: middle;
    margin: 0 5px;
  }

  .search-title {
    border-bottom: 1px solid rgb(233, 233, 233);
    color: #666;
    display: flex;
    line-height: 50px;

    .left-txt,
    .right-txt {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      font-weight: 650;
      font-size: 14px;
      display: inline-block;
      padding: 0 20px;
      text-align: left;
      margin: 0;
    }

    .right-txt {
      text-align: right;
      .el-button {
        font-weight: 650;
      }
    }
  }

  .search-header {
    background: #fff;
    margin-bottom: 15px;
    border: 1px solid rgb(233, 233, 233);
    .header-content {
      padding: 15px;
    }
    .search-btn {
      float: right;
      margin-right: 15px;
    }
  }

  .search-content {
    border: 1px solid rgb(233, 233, 233);
    background: #fff;

    .table-content {
      padding: 20px;
    }
  }
}
</style>
