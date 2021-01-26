<template>
  <div class="wrapper">
    <el-form
      :model="pakingForm"
      :rules="rules"
      ref="pakingFormRefs"
      label-width="100px"
      class="demo-pakingForm"
    >
      <el-form-item label="停车场名称" prop="name">
        <el-input v-model="pakingForm.name"></el-input>
      </el-form-item>

      <el-form-item label="停车场区域" prop="area">
        <el-select v-model="pakingForm.area" placeholder="请选择停车场区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="类型" prop="type">
        <el-radio-group v-model="pakingForm.type">
          <el-radio label="室内"></el-radio>
          <el-radio label="室外"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="可停放车辆" prop="number">
        <el-input type="number" v-model="pakingForm.number"></el-input>
      </el-form-item>

      <el-form-item label="是否禁用" prop="isok">
        <el-radio-group v-model="pakingForm.isok">
          <el-radio label="禁用"></el-radio>
          <el-radio label="启用"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="位置" prop="address">
        <el-input type="text" v-model="pakingForm.address"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('pakingFormRefs')">
          立即创建
        </el-button>
        <el-button @click="resetForm('pakingFormRefs')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "addPakinbg",
  data() {
    return {
      pakingForm: {
        name: "",
        area: "",
        type: "",
        number: "",
        isok: false,
        address: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入停车场名称", trigger: "blur" }
        ],
        area: [
          { required: true, message: "请选择停车场区域", trigger: "blur" }
        ],
        number: [
          {
            type: "number",
            required: true,
            message: "请选择停车场可停放车辆数",
            trigger: "blur"
          }
        ],
        type: [
          { required: true, message: "请选择停车场类型", trigger: "change" }
        ],
        isok: [
          { required: true, message: "请选择停车场启用状态", trigger: "change" }
        ],
        address: [
          { required: true, message: "请选择停车场区域", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>
