//基础表格带分页模板
<template>
  <div class="v-table">
    <div class="main">
      <el-table :data="tableData" border :size="size">
        <el-table-column
          header-align="center"
          align="center"
          v-for="(value, key) in tableColumnData"
          :prop="key"
          :label="value"
          :key="key"
        >
        </el-table-column>
        <slot name="action"></slot>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageData.pageNum"
        :page-sizes="pageSizes"
        :page-size="pageData.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageData.pageTotal"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import Pagination from "@/components/Pagination.vue";
export default {
  name: "",
  components: {
    // Pagination
  },
  props: {
    size: {
      type: String,
      default: function() {
        return "medium";
      }
    },
    tableColumnData: {
      type: Object,
      default: function() {
        return {};
      }
    },
    tableData: {
      type: Array,
      default: function() {
        return [];
      }
    },
    pageData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      pageSizes: [10, 20, 30]
    };
  },
  created() {
    console.log(this.tableColumnData);
  },
  methods: {
    //改变每页数据
    handleSizeChange(val) {
      this.$emit("onPageSearch", this.pageData.pageNum, val);
    },
    //换页
    handleCurrentChange(val) {
      this.$emit("onPageSearch", val, this.pageData.pageSize);
    }
  }
};
</script>
<style lang="less" scoped>
.v-table {
  background-color: #fff;
  .pagination {
    margin: 20px 0 0 0;
  }
  .el-pagination {
    text-align: left;
  }
  .el-pagination .el-select .el-input .el-input__inner {
    padding-right: 25px;
    border-radius: 3px;
    height: 28px;
    line-height: 28px;
  }
}
</style>
