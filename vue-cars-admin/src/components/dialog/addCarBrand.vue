<template>
  <div class="wrapper">
    <el-dialog
      title="新增汽车品牌"
      :visible.sync="brandDialogVisible"
      @close="close"
    >
      <el-form :model="addBrandForm">
        <el-form-item label="汽车品牌" label-width="120px">
          <el-input
            v-model="addBrandForm.car_brand"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="品牌型号" label-width="120px">
          <el-input
            v-model="addBrandForm.brand_type"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="LOGO" label-width="120px">
          <div class="uploadImg" @click="uploadBrandImg">
            <img src="../../assets/images/car_logo.jpg" alt="" />
          </div>
          <ul class="brandLogoList">
            <li @click="chooseBrand">
              <img src="../../assets/images/car_logo.jpg" alt="" />
            </li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/car_logo.jpg" alt="" /></li>
            <li><img src="../../assets/images/header-icon.jpg" alt="" /></li>
          </ul>
        </el-form-item>

        <el-form-item label="是否禁用" label-width="120px">
          <el-radio-group v-model="addBrandForm.isok">
            <el-radio label="禁用"></el-radio>
            <el-radio label="启用"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="品牌描述" label-width="120px">
          <el-input
            type="textarea"
            v-model="addBrandForm.car_desc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="brandDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addbrandSubmit">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "brandDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    dialogForm: {
      type: Object,
      default: {
        car_brand: "",
        brand_type: "",
        img: "",
        isok: "",
        car_desc: ""
      }
    }
  },
  data() {
    return {
      brandDialogVisible: false,
      addBrandForm: {}
    };
  },
  watch: {
    dialogVisible(value) {
      this.brandDialogVisible = value;
    },
    dialogForm(value) {
      this.addBrandForm = value;
    }
  },
  mounted() {
    console.log(this.dialogVisible);
  },
  methods: {
    // 提交新增品牌表单
    addbrandSubmit() {
      let _this = this;
      _this.brandDialogVisible = false;
      console.log("提交新增品牌表单");
    },
    // 上传品牌图片
    uploadBrandImg() {},
    // 选择品牌图片
    chooseBrand() {},
    close() {
      // this.$emit("update:dialogVisible",this.brandDialogVisible)
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
}
.uploadImg {
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
  border: 1px dashed #dcdfe6;
  border-radius: 4px;
  &::after {
    content: "";
    width: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top: 2px solid #dcdfe6;
  }
  &::before {
    content: "";
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-left: 2px solid #dcdfe6;
  }
  img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.brandLogoList {
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 5px 10px 5px 0;
    width: 80px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>