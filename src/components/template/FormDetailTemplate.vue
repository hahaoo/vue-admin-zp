<template>
  <div id="formDetail" class="form-detail-wrapper">
    <div class="detail-header">
      <div class="header-left">
        <slot name="detailHeader"></slot>
      </div>
      <div class="header-right">
        <slot name="detailHeaderRight"> <i class="tagging">*</i>为必填项 </slot>
      </div>
    </div>
    <div class="detail-content">
      <div class="inner" v-loading="editLoading">
        <div class="form-content">
          <slot name="detailContent"></slot>
        </div>
        <div class="action-footer">
          <slot name="detailFooter"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    editLoading: Boolean,
    default() {
      return false;
    }
  },
  components: {}
};
</script>
<style lang="less">
//公共form表单模板，以及详情模板结构样式
#formDetail.form-detail-wrapper {
  max-width: 1360px;
  margin: 0 auto;
  border: 1px solid rgb(233, 233, 233);
  .detail-header {
    background: #fff;
    padding: 13px 20px;
    border-bottom: 1px solid rgb(233, 233, 233);
    display: flex;
    .header-left {
      flex: 2;
    }
    .header-right {
      flex: 1;
    }
    .header-right {
      font-size: 12px;
      color: #999;
      text-align: right;

      .tagging {
        color: red;
        font-size: 16px;
        margin-right: 8px;
        position: relative;
        top: 4px;
      }
    }
    .el-page-header__content {
      font-size: 15px;
      color: #333;
      font-weight: 600;
    }
  }
  .detail-content {
    background: #fff;
    padding: 20px;

    .form-content {
      width: 550px;

      .el-select,
      .el-cascader,
      .el-date-editor {
        width: 100%;
      }

      .avatar {
        width: 100px;
        height: 100px;
        display: block;
      }

      .avatar-uploader {
        .el-upload {
          border: 1px solid #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          background: #f9f9f9;
          .avatar-uploader-icon {
            font-size: 28px;
            color: #c5c1c1;
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
          }
        }

        .el-upload:hover {
          border-color: #409eff;

          .avatar-uploader-icon {
            color: #409eff;
          }
        }
      }
    }
  }

  .action-footer {
    margin: 60px 150px 80px 150px;
    button {
      width: 150px;
      margin-right: 40px;
    }
  }
}
</style>
