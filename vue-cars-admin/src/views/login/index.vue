<template>
  <div id="login-wrapper">
    <div class="form">
      <div class="item-wrapper">
        <span
          v-for="item in loginItem"
          :key="item.id"
          :class="{ current: item.current }"
          @click="toggleMenu(item)"
          >{{ item.item }}</span
        >
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="login-form"
        size="medium "
      >
        <el-form-item prop="username">
          <label for="username">邮箱</label>
          <el-input
            id="username"
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="请输入邮箱"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <label for="password">密码</label>
          <el-input
            id="password"
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item
          prop="passwords"
          v-if="module == 'register' ? true : false"
        >
          <label for="passwords">重复密码</label>
          <el-input
            id="passwords"
            type="password"
            v-model="ruleForm.passwords"
            autocomplete="off"
            placeholder="请重新输入密码"
            minlength="6"
            maxlength="20"
          ></el-input>
        </el-form-item>

        <el-form-item prop="vcode">
          <label for="vcode">验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input
                id="vcode"
                v-model="ruleForm.vcode"
                placeholder="请输入验证码"
                minlength="6"
                maxlength="6"
              ></el-input>
            </el-col>
            <el-col :span="9">
              <el-button
                type="success"
                @click="getVcode"
                class="block"
                :disabled="vcodeBtn.status"
                >{{ vcodeBtn.text }}</el-button
              >
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button
            type="danger"
            @click="submitForm('ruleForm')"
            class="login-btn block"
            :disabled="buttonStatus"
            >{{ module == "register" ? "注册" : "登录" }}</el-button
          >
        </el-form-item>

        <el-form-item v-show="module == 'login'">
          <el-checkbox :checked="rememberPassword" @change="passFlagChange"
            >记住密码</el-checkbox
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 校验
import {
  stripscript,
  checkUsername,
  checkPassword,
  checkVcode
} from "@/utils/validate.js";
// Cookie
import { setPassFlag, getPassFlag, setUserInfo, getUserInfo } from "@/utils/app";
// API
import { GetVcode, Login, Register } from "@/api/login.js";
export default {
  name: "Login",
  data() {
    // 用户名
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (checkUsername(value)) {
        callback(new Error("用户名格式不正确"));
      } else {
        callback();
      }
    };
    // 密码
    var validatePass = (rule, value, callback) => {
      value = stripscript(value);
      this.ruleForm.password = stripscript(value);
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (checkPassword(value)) {
        callback(new Error("密码格式为6-20位数字及字母的组合!"));
      } else {
        callback();
      }
    };
    // 重复密码
    var validatePass2 = (rule, value, callback) => {
      if (!this.ruleForm.password) {
        callback(new Error("请先输入密码，再重复输入"));
      } else if (value === "") {
        callback(new Error("请输入密码"));
      } else if (this.ruleForm.password !== value) {
        callback(new Error("密码两次输入不一致，请重新输入"));
      } else {
        callback();
      }
    };
    // 验证码
    var validateVcode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else if (checkVcode(value)) {
        callback(new Error("验证码不正确"));
      } else {
        callback();
      }
    };
    return {
      module: "login",
      // 登录注册按钮的禁用状态
      buttonStatus: true,
      // 倒计时
      timer: "",
      vcodeBtn: { status: false, text: "获取验证码" },
      loginItem: [
        {
          id: 0,
          item: "登录",
          module: "login",
          current: true
        },
        {
          id: 1,
          item: "注册",
          module: "register",
          current: false
        }
      ],
      ruleForm: {
        username: "",
        password: "",
        passwords: "",
        vcode: ""
      },
      rules: {
        username: [
          {
            validator: validateName,
            trigger: "blur"
          }
        ],
        password: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ],
        passwords: [
          {
            validator: validatePass2,
            trigger: "blur"
          }
        ],
        vcode: [
          {
            validator: validateVcode,
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
    console.log("sha1 加密", this.$sha1("123456"));
	if(this.module=='login' && this.rememberPassword){
		let USERNAME = getUserInfo()
		this.ruleForm.username = USERNAME.email
		this.ruleForm.password = USERNAME.password
	}
  },
  computed: {
    // 记住密码
    rememberPassword: {
      // getter
      get: function() {
        return getPassFlag() == 'true' ? true : false
      },
      // setter
      set: function(newValue) {
        return newValue
      }
    }
  },
  methods: {
    passFlagChange(value) {
      this.rememberPassword = value
      setPassFlag(value);
    },
    /**
     * 切换tabs
     */
    toggleMenu(data) {
      // 重置表单、更改登录按钮状态
      this.$refs.ruleForm.resetFields();
      this.buttonStatus = true;
      this.clearCountDown();
      this.loginItem.forEach(item => {
        item.current = false;
      });
      data.current = true;
      this.module = data.module;
    },
    /**
     * 获取验证码
     */
    getVcode() {
      let _this = this;
      // 校验
      if (!_this.ruleForm.username) {
        this.$message.error("请输入用户名");
        return false;
      }
      if (checkUsername(_this.ruleForm.username)) {
        this.$message.error("用户名格式不正确");
        return false;
      }
      // 更改获取验证码按钮状态
      _this.vcodeBtn.status = true;
      _this.vcodeBtn.text = "发送中";

      // 请求验证码
      const delayed = setTimeout(() => {
        GetVcode({
          module: _this.module,
          username: _this.ruleForm.username
        })
          .then(res => {
            _this.buttonStatus = false;
            _this.countDown(60);
            _this.$message({
              message: res.message,
              type: "success"
            });
          })
          .catch(err => {
            console.log(err);
          });
        clearTimeout(delayed);
      }, 2000);
    },
    /**
     * 倒计时
     */
    countDown(number) {
      let _this = this;
      if (_this.timer) {
        clearInterval(_this.timer);
      }
      _this.timer = setInterval(() => {
        number--;
        _this.vcodeBtn.text = `倒计时${number}秒`;
        if (number == 0) {
          clearInterval(_this.timer);

          // 更改获取验证码按钮状态
          _this.vcodeBtn.status = false;
          _this.vcodeBtn.text = "再次发送";
        }
      }, 1000);
    },
    /**
     * 清除倒计时
     */
    clearCountDown() {
      this.vcodeBtn.status = false;
      this.vcodeBtn.text = "获取验证码";
      clearInterval(this.timer);
    },
    /**
     * 提交表单
     */
    submitForm(formName) {
      let _this = this;
      const data = {
        username: _this.ruleForm.username,
        password: _this.ruleForm.password,
        code: _this.ruleForm.vcode
      };
      this.$refs[formName].validate(valid => {
        if (valid) {
          _this.module === "login" ? _this.login(data) : _this.register(data);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    /**
     * 登录
     */
    login(val) {
      this.$store
        .dispatch("login", val)
        .then(res => {
          console.log("Vuex actions", res);
          this.$message({
            type: "success",
            message: res.message
          });
		  if(this.rememberPassword){
			  console.log('保存用户信息')
			  setUserInfo({
				  email: val.username,
				  password: val.password
			  })
		  }
          const pushing = setTimeout(() => {
            this.$router.push({
              name: "Home"
            });
            clearTimeout(pushing);
          }, 1500);
        })
        .catch(err => {
          console.log(err);
        });
    },
    /**
     * 注册
     */
    register(val) {
      Register(val)
        .then(res => {
          this.$message({
            type: "success",
            message: res.message
          });
          this.toggleMenu(this.ruleForm[0]);
          this.clearCountDown();
        })
        .catch(err => {
          console.log(err);
          this.toggleMenu(this.loginItem[0]);
          this.clearCountDown();
        });
    }
  }
};
</script>

<style lang="scss">
#login-wrapper {
  position: relative;
  display: flex;
  background-color: $main-color;
  height: 100%;
}

.form {
  width: 330px;
  margin: auto;
}

.item-wrapper {
  text-align: center;
  color: white;
  margin-bottom: 35px;

  span {
    display: inline-block;
    width: 88px;
    height: 36px;
    line-height: 36px;
    cursor: pointer;
    @include webkitB(border-radius, 2px);
  }

  .current {
    background-color: rgba($color: #000000, $alpha: 0.1);
  }
}

.login-form {
  label {
    color: white;
    font-size: 14px;
  }

  .block {
    display: block;
    width: 100%;
  }

  .login-btn {
    margin-top: 10px;
  }
}
</style>
