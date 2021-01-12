<template>
  <div class="password-wrapper">
    <HeadBack :title="'实名认证'" />

    <div class="form-wrapper">
      <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
        <el-tab-pane label="身份证上传" name="IDCard">身份证上传</el-tab-pane>
        <el-tab-pane label="驾驶证上传" name="DriverCard">驾驶证上传</el-tab-pane>
      </el-tabs>
      
      <div>
        <div class="card add-card"></div>
        <p class="tips">正面</p>
        <div class="card add-card"></div>
        <p class="tips">反面</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bindCard",
  data() {
    return {
      activeName: "IDCard"
    };
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss">
.form-wrapper {
  padding: 0 30px;
}
.el-tabs__nav-wrap::after{
height: 0;
}
.el-tabs__active-bar{
  width: 30px !important;
  height: 4px;
  left: 60px;
  background-color: #00a3ff;
  @include webkitB(border-radius, 2px)
}
.el-tabs__item {
  color: white !important;
  opacity: 0.5;
  &.is-active {
    opacity:1;
  }
}

.card {
  position: relative;
  height: 149px;
  border: 1px dashed #282d32;
  margin-bottom: 20px;
  margin-top: 40px;
  color: white;
  text-align: center;
  @include webkitB(border-radius, 8px);
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  h4 {
    font-weight: bold;
    font-size: 18px;
    height: 80px;
    width: 135px;
    line-height: 80px;
  }
  p.number {
    font-size: 30px;
    height: 110px;
    line-height: 110px;
  }
}
.add-card {
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 21px;
    border-top: 2px solid #282d32;
    margin-left: -10px;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    height: 21px;
    border-left: 2px solid #282d32;
    margin-top: -10px;
  }
}
p.tips{
color: white;
opacity: .5;
text-align: center;
}
</style>