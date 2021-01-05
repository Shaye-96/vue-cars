<template>
  <div class="navBar">
    <ul>
      <li><i class="icon icon-help"></i></li>
      <li><i class="icon icon-search"></i></li>
      <li><a href="javascript:(o)">选择车辆</a></li>
      <li><i class="icon icon-local"></i></li>
      <li @click="showUser"><i class="icon icon-my"></i></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "navBar",
  props: {
    value: {
      type: String,
      default: "a"
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    showUser() {
      console.log("showUser ");
      this.$router.push({
        name: "User"
      });
    }
  }
};
</script>
<style lang="scss">
.navBar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  z-index: 10;
  text-align: center;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      margin: 0 17px;
      i[class^="icon"] {
        display: inline-block;
        width: 44px;
        height: 44px;
        line-height: 44px;
        background-color: $main-color;
        background-repeat: no-repeat;
        cursor: pointer;
        border-radius: 100px;
      }
      a {
        display: inline-block;
        width: 238px;
        height: 84px;
        line-height: 84px;
        font-size: 26px;
        font-weight: 300;
        color: #ffffff;
        background-color: $main-color;
        border-radius: 100px;
      }
    }
  }
}
</style>