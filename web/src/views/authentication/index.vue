<template>
  <div class="password-wrapper">
    <HeadBack :title="'实名认证'" />
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">身份证上传</el-menu-item>
      <el-menu-item index="2">驾驶证上传</el-menu-item>
    </el-menu>
    <div class="form-wrapper">
      <div class="card">
        <img src="../../assets/images/bank.png" alt="" />
        <h4 class="bank-name">中国银行</h4>
        <p class="number">6236 **** **** 191</p>
      </div>
      <router-link to="/addcard" tag="div" class="card add-card"></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "bindCard",
  data() {
    return {
      activeIndex: "1"
    };
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.form-wrapper {
  padding: 0 30px;
}
.card {
  position: relative;
  height: 190px;
  border: 1px dashed #282d32;
  margin-bottom: 25px;
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
</style>