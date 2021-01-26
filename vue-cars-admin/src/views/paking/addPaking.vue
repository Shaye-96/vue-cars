<template>
	<div class="wrapper">
		<el-form :model="pakingForm" :rules="rules" ref="pakingFormRefs" label-width="100px" class="demo-pakingForm">
			<el-form-item label="停车场名称" prop="name">
				<el-input v-model="pakingForm.name"></el-input>
			</el-form-item>

			<el-form-item label="停车场区域" prop="area">
				<el-cascader v-model="pakingForm.area" :options="paking_area_options" @change="areaCascaderChange"></el-cascader>
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
				<div class="GDMap">
					<el-amap class="amap-demo" :vid="'amapDemo'" :amap-manager="amapManager" :events="events"></el-amap>
				</div>
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
	import {
		AMapManager,
		lazyAMapApiLoaderInstance
	} from "vue-amap";
	let amapManager = new AMapManager();
	export default {
		name: "addPakinbg",
		data() {
			return {
				pakingForm: {
					name: "",
					area: "",
					type: "",
					number: "",
					isok: "",
					address: ""
				},
				rules: {
					name: [{
						required: true,
						message: "请输入停车场名称",
						trigger: "blur"
					}],
					area: [{
						required: true,
						message: "请选择停车场区域",
						trigger: "blur"
					}],
					number: [{
						type: "number",
						required: true,
						message: "请选择停车场可停放车辆数",
						trigger: "blur"
					}],
					type: [{
						required: true,
						message: "请选择停车场类型",
						trigger: "change"
					}],
					isok: [{
						required: true,
						message: "请选择是否禁用",
						trigger: "change"
					}],
					address: [{
						required: true,
						message: "请选择停车场区域",
						trigger: "blur"
					}]
				},
				paking_area_options: [],
				//地图
				map: null,
				// zoom 地图初始化缩放比例
				zoom: 18,
				amapManager,
				events: {}
			};
		},
		mounted() {
			let _this = this;
			// 创建地图实例，并保存到map(高德地图原生api)
			lazyAMapApiLoaderInstance.load().then(() => {
			  _this.map = new AMap.Map("amapDemo", {
			    center: new AMap.LngLat(121.59996, 31.197646),
			    zoom: _this.zoom
			  });
			});
		}, 
		methods: {
			areaCascaderChange() {},
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
		height: 100%;
		overflow-x: hidden;
		overflow-y: scroll;

		&::-webkit-scrollbar {
			display: none
		}
	}

	/deep/ .el-input {
		width: 200px;
	}

	.GDMap {
		width: 800px;
		height: 400px;
		margin-top: 20px;
		border: 1px solid #DCDFE6;
	}
</style>
