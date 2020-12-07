<template>
  <div class="basic-table">
    <h4>基础表格模板使用示例</h4>
    <el-table :data="tableData" border size="small">
      <el-table-column
        prop="date"
        label="日期"
        align="center"
        header-align="center"
      >
      </el-table-column>
      <el-table-column label="姓名" align="center" header-align="center">
        <template slot-scope="scope">
          <el-link
            icon="el-icon-view"
            type="primary"
            @click="handleHref(scope.row.name)"
          >
            {{ scope.row.name }}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column label="地址" align="center" header-align="center">
        <template slot-scope="scope">
          <el-tooltip placement="top">
            <div slot="content">{{ scope.row.address }}</div>
            <el-button size="mini">查看地址</el-button>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        header-align="center"
        fixed="right"
      >
        <template>
          <el-button type="text" size="mini">查看</el-button>
          <el-button type="text" size="mini">编辑</el-button>
          <el-button type="text" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination
      :pageData="pageData"
      @onPageSearch="paginationSearch(arguments)"
    ></Pagination>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";
export default {
  name: "",
  components: {
    Pagination
  },
  data() {
    return {
      pageData: { pageNum: 1, pageSize: 20, pageTotal: 0, currentPage: 1 },
      tableData: []
    };
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      this.tableData = [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ];
      this.pageData.pageTotal = this.tableData.length;
    },
    handleHref(id) {
      alert(id);
      // this.$router.push("/advancedTable/list");
    },
    paginationSearch(data) {
      console.log(data);
      this.pageData.pageNum = data[0];
      this.pageData.pageSize = data[1];
      this.getTableList(this.pageData);
    }
  }
};
</script>
<style lang="less" scoped>
.basic-table {
  background-color: #fff;
  padding: 10px;
  h4 {
    margin: 0 0px 10px 0;
  }
}
</style>
