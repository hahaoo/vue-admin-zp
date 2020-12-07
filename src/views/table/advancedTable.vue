<template>
  <div class="advanced-table">
    <h4 class="title">可编辑表格模板使用示例</h4>
    <el-table :data="tableData" v-loading="tableLoading" border size="small">
      <el-table-column
        prop="date"
        label="日期"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <el-date-picker
            v-if="scope.row.editable"
            v-model="scope.row.date"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <div v-else>
            {{ scope.row.date }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.editable"
            v-model="scope.row.name"
            placeholder="请输入内容"
          ></el-input>
          <div v-else>
            {{ scope.row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        header-align="center"
        align="center"
      >
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.editable"
            v-model="scope.row.address"
            placeholder="请输入内容"
          >
          </el-input>
          <div v-else>
            {{ scope.row.address }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" header-align="center" align="center">
        <template slot-scope="scope">
          <div v-if="scope.row.editable">
            <span v-if="scope.row.isNew">
              <el-button
                type="text"
                size="small"
                @click="comfirmAddRow(scope.$index)"
                >添加
              </el-button>

              <el-button
                plain
                type="text"
                size="small"
                @click="deleteRow(scope.$index)"
                >删除
              </el-button>
            </span>
            <span v-else>
              <el-button type="text" size="small" @click="saveRow(scope.$index)"
                >保存
              </el-button>
              <el-button
                type="text"
                size="small"
                @click="cancelRow(scope.$index)"
                >取消
              </el-button>
            </span>
          </div>
          <div v-else>
            <el-button
              plain
              type="text"
              size="small"
              @click="editRow(scope.$index)"
              >编辑
            </el-button>
            <el-button
              plain
              type="text"
              size="small"
              @click="deleteRow(scope.$index)"
              >删除
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-button
      class="add-btn"
      plain
      type="primary"
      icon="el-icon-circle-plus"
      @click="addNewRow()"
      >增加
    </el-button>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      tableLoading: false,
      originalData: {},
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
          editable: false,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          editable: false,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 666 弄"
        },
        {
          editable: false,
          date: "2016-05-01",
          name: "王小龙",
          address: "上海市普陀区金沙江路 7777 弄"
        },
        {
          editable: false,
          date: "2016-05-03",
          name: "王小猫",
          address: "上海市普陀区金沙江路 9899 弄"
        }
      ];
    },
    //新增表格
    addNewRow() {
      this.tableData.push({
        editable: true, //可编辑的
        isNew: true, //新增的
        data: "",
        name: "",
        address: ""
      });
    },
    editRow(index) {
      this.tableData[index].editable = true;
      this.originalData = this.tableData[index];
    },
    deleteRow(index) {
      this.tableData.splice(index, 1);
    },
    comfirmAddRow(index) {
      this.tableLoading = true;
      var row = this.tableData[index];
      if (!row.date || !row.name || !row.address) {
        this.tableLoading = false;
        this.$message.error("请填写当前行完整信息。");
        return;
      }
      // 模拟网络请求、卡顿 800ms
      new Promise(resolve => {
        setTimeout(() => {
          resolve({ loop: false });
        }, 800);
      }).then(() => {
        const target = this.tableData[index];
        target.editable = false;
        target.isNew = false;
        this.tableLoading = false;
      });
    },
    cancelRow(index) {
      this.tableData[index].editable = false;
      this.tableData[index] = this.originalData;
    },
    //编辑的保存
    saveRow(index) {
      this.tableLoading = true;
      var row = this.tableData[index];
      if (!row.date || !row.name || !row.address) {
        this.tableLoading = false;
        this.$message.error("请填写当前行完整信息。");
        return;
      }
      // 模拟网络请求、卡顿 800ms
      new Promise(resolve => {
        setTimeout(() => {
          resolve({ loop: false });
        }, 800);
      }).then(() => {
        const target = this.tableData[index];
        target.editable = false;
        target.isNew = false;
        this.tableLoading = false;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.advanced-table {
  background-color: #fff;
  padding: 10px;
  .title {
    margin: 0 0px 10px 0;
  }
  .add-btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
