<template>
  <div>
    <button type="button" class="button-vcode" @click="getVcode">
      获取验证码
    </button>
  </div>
</template>

<script>
export default {
  name: "buttonVcode",
  methods: {
    getVcode() {
      console.log('获取验证码')
    }
  }
};
</script>

<style lang="scss">
.button-vcode {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 2;
  font-size: 12px;
  padding: 8px 20px;
  border: none;
  color: #ffffff;
  background-color: #34393f;
  text-align: center;
  outline: none;
  cursor: pointer;
  @include webkitB(box-sizing, border-box);
  @include webkitB(border-radius, 4px);
}
</style>