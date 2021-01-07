<template>
  <div>
    <amap />
    <!-- <cars /> -->
    <nav-bar />
    <div id="children-wrapper" :class="[userFlag ? 'open' : '']">
      <!-- 控制盒子的位置，当路径为/user时，显示子路由内容 -->
      <router-view />
    </div>
  </div>
</template>

<script>
// 引入自定义组件
import amap from "../amap/index";
import cars from "../cars/index";
import navBar from "@c/navBar/index";

export default {
  name: "Index",
  components: {
    amap,
    cars,
    navBar
  },
  data() {
    return {};
  },
  computed: {
    userFlag() {
      const router = this.$route;
      return router.name === "User" ? true : false;
    }
  },
  watch: {
    // $route: {
    //   handler(newValue) {
    //     let routerName = newValue.name;
    //     this.userFlag = routerName === "User" ? true : false;
    //     console.log(this.userFlagv);
    //   }
    // }
  },
  mounted() {
    document.addEventListener("mouseup", e => {
      const carsCon = document.getElementById("children-wrapper");
      if (carsCon&&!carsCon.contains(e.target)) {
        // contains()，js原生方法，用于判断DOM元素的包含关系；
        this.$router.push({
            name: "Index"
          });
      }
    });
  },
  methods: {}
};
</script>

<style lang="scss">
#children-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -500px;
  height: 100%;
  width: 410px;
  background-color: $main-color;
  z-index: 101;
  @include webkitB(transition, all 0.3s ease 0s);
  // -webkit-transition: all .3s ease 0s;
  // -moz-transition: all .3s ease 0s;
  // -ms-transition: all .3s ease 0s;
  // -o-transition: all .3s ease 0s;
  // transition: all .3s ease 0s;
  &.open {
    right: 0px;
  }
}
</style>