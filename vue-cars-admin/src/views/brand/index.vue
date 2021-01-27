<template>
  <div>
    <el-row>
      <el-col :span="16">
        <el-form :inline="true" :model="brandSearch" class="demo-form-inline">
          <el-form-item label="车辆品牌">
            <el-select v-model="brandSearch.car_brand" placeholder="车辆品牌">
              <el-option label="大众" value="shanghai"></el-option>
              <el-option label="福特" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="品牌型号">
            <el-input
              v-model="brandSearch.brand_type"
              placeholder="品牌型号"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearch">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8" class="align-right">
        <el-button type="primary" @click="brandDialogVisible = true"
          >新增车辆品牌</el-button
        >
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="brandTable"
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
        prop="logo"
        label="LOGO"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="brand"
        label="车辆品牌"
      ></el-table-column>
      <el-table-column align="center" prop="type" label="车辆型号">
      </el-table-column>
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
    <!-- 新增汽车品牌弹窗 -->
    <BrandDialog
      :dialogVisible.sync="brandDialogVisible"
      :dialogForm="addBrandForm"
    />
  </div>
</template>

<script>
import BrandDialog from "../../components/dialog/addCarBrand";
export default {
  name: "PakingList",
  data() {
    return {
      // 查询品牌表单
      brandSearch: {
        car_brand: "",
        brand_type: ""
      },
      // 品牌表格
      brandTable: [
        {
          logo: "停车场名称",
          brand: "品牌",
          type: "型号",
          isok: true
        }
      ],
      // 新增弹窗显示
      brandDialogVisible: false,
      addBrandForm: {
        car_brand: "",
        brand_type: "",
        img: "",
        isok: "",
        car_desc: ""
      }
    };
  },
  components: {
    BrandDialog
  },
  methods: {
    // 查询
    onSearch() {
      console.log("search!");
    },
    // 表格中车辆禁用状态改变
    isOkChange(value) {
      console.log(value);
    },
    // 品牌编辑
    handleEdit(index, value) {
      console.log(index, value);
    },
    // 品牌删除
    handleDelete(index, value) {
      console.log(index, value);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-table-column--selection .cell {
  padding-left: 10px !important;
}
</style>
