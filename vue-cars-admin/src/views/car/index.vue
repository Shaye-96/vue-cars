<template>
  <div>
    <el-row>
      <el-col :span="16">
        <el-form :inline="true" :model="carSearch" class="demo-form-inline">
          <el-form-item label="车辆品牌">
            <el-select v-model="carSearch.car_type" placeholder="车辆品牌">
              <el-option label="室内" value="shanghai"></el-option>
              <el-option label="室外" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="车牌号">
            <el-input
              v-model="carSearch.car_num"
              placeholder="车牌号"
            ></el-input>
          </el-form-item>

          <el-form-item label="关键字">
            <el-select v-model="carSearch.car_type" placeholder="关键字" class="keywordSelect">
              <el-option label="室内" value="shanghai"></el-option>
              <el-option label="室外" value="beijing"></el-option>
            </el-select>
            <el-input
              v-model="carSearch.car_num"
              placeholder="车牌号"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8" class="align-right">
        <router-link to="/addCar">
          <el-button type="primary">新增停车场</el-button>
        </router-link>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="carTable"
      border
      stripe
      style="width: 100%; margin-top: 20px;"
    >
      <el-table-column
        align="center"
        type="selection"
        width="40"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="name"
        label="停车场名称"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="type"
        label="类型"
      ></el-table-column>
      <el-table-column align="center" prop="area" label="区域">
      </el-table-column>
      <el-table-column
        align="center"
        prop="number"
        label="可停放车辆"
      ></el-table-column>
      <el-table-column align="center" prop="isok" label="是否禁用">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.isok"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="isOkChange(scope.row.isok)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="address"
        label="查看位置"
      ></el-table-column>
      <el-table-column align="center" prop="options" label="操作">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="mini"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "carList",
  data() {
    return {
      carSearch: {
        car_type: "",
        car_num: ""
      },

      carTable: [
        {
          name: "停车场名称",
          type: "类型",
          area: "区域",
          number: "可停放车辆",
          isok: true,
          address: "查看位置",
          options: "操作"
        }
      ]
    };
  },
  methods: {
    // 查询
    onSearch() {
      console.log("search!");
    },
    // 禁用状态改变
    isOkChange(value) {
      console.log(value);
    },
    // 停车场编辑
    handleEdit(index, value) {
      console.log(index, value);
    },
    // 停车场删除
    handleDelete(index, value) {
      console.log(index, value);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-input,
.el-select {
  width: 160px;
}
.keywordSelect{
	width: 100px;
	margin-right: 10px;
}
/deep/ .el-table-column--selection .cell {
  padding-left: 10px !important;
}
</style>
