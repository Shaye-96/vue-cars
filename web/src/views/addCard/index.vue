<template>
  <div class="password-wrapper">
    <HeadBack :title="'添加银行卡'" />
    <div class="form-wrapper">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="开户名"></el-input>
        </el-form-item>

        <el-form-item>
          <el-select v-model="form.bank" placeholder="请选择开户银行">
            <el-option label="建设银行" value="shanghai"></el-option>
            <el-option label="农业银行" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-input v-model="form.mobile" placeholder="预留手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <ButtonVcode />
          <el-input v-model="form.code" placeholder="手机验证码"></el-input>
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
        name: "",
        bank: "",
        mobile: "",
        code: ""
      }
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log("submit!");
    }
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
.el-select {
  width: 100%;
  &:hover {
    .el-input__inner {
      border-color: #202429;
    }
  }
  .el-icon-arrow-up:before {
    color: #000;
  }
}
.button-confirm {
  display: block;
  width: 100%;
}
</style>