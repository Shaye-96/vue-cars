<template>
  <div class="password-wrapper">
    <HeadBack :title="'修改登录密码'" />
    <div class="form-wrapper">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input
            v-model="form.oldPassWord"
            placeholder="原始密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.newPassWord" placeholder="新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.confirm" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.code" placeholder="验证码"></el-input>          
          <el-button type="primary" @click="getCode">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
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
        oldPassWord: "",
        newPassWord: "",
        confirm: "",
        code: ""
      }
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    getCode(){}
  }
};
</script>

<style lang="scss">
.form-wrapper {
  padding: 0 30px;
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
</style>