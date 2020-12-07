<template>
  <div class="table-layout-example">
    <SearchTableTemplate>
      <template v-slot:headerContent>
        <el-form :inline="true" :model="formInline" size="small">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template v-slot:tableTitleRight>
        <el-button type="primary" size="small">操作按钮</el-button>
      </template>
      <template v-slot:tableContent>
        <Vtable
          size="small"
          :tableColumnData="tableColumnData"
          :tableData="tableData"
          :pageData="pageData"
          @onPageSearch="paginationSearch(arguments)"
        >
          <template v-slot:action>
            <el-table-column label="操作" header-align="center" align="center">
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  size="mini"
                  @click="handleView(scope.row.id)"
                  >查看
                </el-button>
              </template>
            </el-table-column>
          </template>
        </Vtable>
      </template>
    </SearchTableTemplate>
  </div>
</template>

<script>
import Vtable from "@/components/Vtable.vue"; //基础表格分页展示
import SearchTableTemplate from "@/components/template/SearchTableTemplate";
export default {
  name: "",
  props: {},
  components: {
    SearchTableTemplate,
    Vtable
  },
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableColumnData: {
        date: "日期1",
        name: "名称1",
        address: "地址1"
      },
      pageData: {
        pageNum: 1,
        pageSize: 10,
        pageTotal: 0,
        currentPage: 1
      },
      tableData: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    //获取列表数据并处理数据
    getList() {
      var res = [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        }
      ];
      this.tableData = res;
      this.pageData.pageTotal = res.length;
    },
    handleView(data) {
      alert(data);
    },
    //分页
    paginationSearch(data) {
      this.pageData.pageSize = data[1];
      this.getList();
    }
  }
};
</script>

<style lang="less"></style>
