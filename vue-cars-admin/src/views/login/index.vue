<template>
	<div id="login-wrapper">
		<div class="form">
			<div class="item-wrapper">
				<span v-for="item in loginItem" :key="item.id" :class="{ current: item.current }" @click="toggleMenu(item)">{{ item.item }}</span>
			</div>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium ">
				<el-form-item prop="username">
					<label for="username">邮箱</label>
					<el-input id="username" type="text" v-model="ruleForm.username" autocomplete="off" placeholder="请输入邮箱"></el-input>
				</el-form-item>

				<el-form-item prop="password">
					<label for="password">密码</label>
					<el-input id="password" type="text" v-model="ruleForm.password" autocomplete="off" placeholder="请输入密码" minlength="6" maxlength="20"></el-input>
				</el-form-item>

				<el-form-item prop="passwords" v-if="module == 'register' ? true : false">
					<label for="passwords">重复密码</label>
					<el-input id="passwords" type="text" v-model="ruleForm.passwords" autocomplete="off" placeholder="请重新输入密码" minlength="6"
					 maxlength="20"></el-input>
				</el-form-item>

				<el-form-item prop="vcode">
					<label for="vcode">验证码</label>
					<el-row :gutter="10">
						<el-col :span="15">
							<el-input id="vcode" v-model.number="ruleForm.vcode" placeholder="请输入验证码" minlength="6" maxlength="6"></el-input>
						</el-col>
						<el-col :span="9">
							<el-button type="success" @click="getVcode" class="block">获取验证码</el-button>
						</el-col>
					</el-row>
				</el-form-item>

				<el-form-item>
					<el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block" :disabled="buttonStatus">{{module == 'register' ? '注册' : '登录'}}</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import {
		stripscript,
		checkUsername,
		checkPassword,
		checkVcode
	} from "@/utils/validate.js";
	import {
		getVcode as vcodeApi
	} from "@/api/login.js";
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
				console.log(rule, value, callback);
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
				loginItem: [{
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
					username: "1151032202@qq.com",
					password: "",
					passwords: "",
					vcode: ""
				},
				rules: {
					username: [{
						validator: validateName,
						trigger: "blur"
					}],
					password: [{
						validator: validatePass,
						trigger: "blur"
					}],
					passwords: [{
						validator: validatePass2,
						trigger: "blur"
					}],
					vcode: [{
						validator: validateVcode,
						trigger: "blur"
					}]
				}
			};
		},
		methods: {
			// 切换tabs
			toggleMenu(data) {
				this.loginItem.forEach(item => {
					item.current = false;
				});
				data.current = true;
				this.module = data.module;
			},
			// 获取验证码
			getVcode() {
				let _this = this;
				if (!_this.ruleForm.username) {
					this.$message.error('请输入用户名');
					return false;
				}
				if (checkUsername(_this.ruleForm.username)) {
					this.$message.error('用户名格式不正确');
					return false;
				}
				// 请求验证码
				vcodeApi({
					module: _this.module,
					username: _this.ruleForm.username
				}).then(res => {
					console.log(res)
				}).catch(err => {

				})
			},
			// 提交表单
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						alert("submit!");
					} else {
						console.log("error submit!!");
						return false;
					}
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
