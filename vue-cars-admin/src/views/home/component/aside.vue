<template>
  <div>
    <img class="logo" src="../../../assets/logo.png" alt="" />
    
      <el-menu
        class="menu-wrapper"
        background-color="rgba(255,255,255,0)"
        text-color="#fff"
        active-text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
      <template v-for="(item,index) in routers">
        <el-submenu :index="index" :key="index">
          <!-- 一级 -->
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <!-- 二级 -->
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        </template>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: "asideContent",
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this.$router.options.routes);
  },
  computed: {
    routers() {
      return this.$router.options.routes;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 70px;
  margin: 25px auto 20px;
}
.menu-wrapper {
  width: 100%;
}
</style>