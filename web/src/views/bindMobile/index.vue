<template>
  <div class="password-wrapper">
    <HeadBack :title="'绑定手机号'" />
    <div class="form-wrapper">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input
            v-model="form.mobile"
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <ButtonVcode/>
          <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="button-confirm" @click="onSubmit"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "password",
  data() {
    return {
      form: {
        mobile: "",
        code: ""
      }
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    // getCode() {
    //   console.log("getCode!");
    // }
  }
};
</script>

<style lang="scss">
.form-wrapper {
  padding: 0 30px;
}
.el-form-item {
  margin-bottom: 20px;
}
.el-input__inner {
  background-color: #202429;
  border-color: #202429;
  &:hover {
    border-color: #202429;
  }
  &::placeholder {
    opacity: 0.2;
  }
}
.button-confirm {
  display: block;
  width: 100%;
}
</style>