<template>
  <div class="wh100">
    <TreeSelectTemplate>
      <!-- 左侧树 -->
      <template v-slot:treeAside>
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
        ></el-tree>
      </template>
      <!-- 右侧搜索 -->
      <template v-slot:treeSearchContent>
        <el-form :inline="true" :model="searchForm">
          <el-form-item label="搜索名称1">
            <el-input
              v-model="searchForm.searchWord"
              placeholder="请输入"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchWord" icon="el-icon-search"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </template>
      <!-- 右侧主内容 -->
      <template v-slot:treeTableContent>
        <el-table
          :data="tableData"
          border
          stripe
          size="small"
          style="width: 100%"
        >
          <el-table-column
            label="序号"
            align="center"
            type="index"
          ></el-table-column>
          <el-table-column prop="agreementName" label="表头1" align="center">
          </el-table-column>
          <el-table-column
            prop="agreementType"
            label="表头2"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="companyName"
            label="表头3"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="orgName"
            label="表头4"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="signDate"
            label="表头5"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="validDate"
            label="表头6"
            align="center"
          ></el-table-column>
          <el-table-column fixed="right" label="操作" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="handle(scope.row.id)"
                >操作按钮</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </template>
    </TreeSelectTemplate>
  </div>
</template>

<script>
import TreeSelectTemplate from "@/components/template/TreeSelectTemplate";
export default {
  name: "",
  components: {
    TreeSelectTemplate
  },
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      searchForm: {
        searchWord: ""
      },
      tableData: []
    };
  },
  created() {},
  methods: {
    handleNodeClick() {}, //点击树形选择器
    searchWord() {}, //搜索
    handle() {} //表格操作
  }
};
</script>
