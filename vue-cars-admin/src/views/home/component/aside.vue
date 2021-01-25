<template>
  <div>
    <img
      class="logo"
      :style="isCollapse ? 'width:30px' : 'width:70px'"
      src="../../../assets/logo.png"
      alt=""
    />

    <el-menu
      :class="isCollapse ? 'menu-wrapper close' : 'menu-wrapper'"
      background-color="rgba(255,255,255,0)"
      text-color="#fff"
      active-text-color="#fff"
      :router="true"
      :collapse="isCollapse"
    >
      <template v-for="(item, index) in routers">
        <el-submenu v-if="!item.hidden" :index="index + ''" :key="index">
          <!-- 一级 -->
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.meta.name }}</span>
          </template>
          <!-- 二级 -->
          <template v-for="(val, i) in item.children">
            <el-menu-item v-if="!val.hidden" :index="val.path" :key="i">{{
              val.meta.name
            }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "asideContent",
  props: {},
  computed: {
    routers() {
      return this.$router.options.routes;
    },
    isCollapse() {
      return this.$store.state.isCollapseAside;
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.logo {
  margin: 25px auto 20px;
  @include webkitB(transition, all 0.3s ease 0s);
}
.menu-wrapper {
  width: 100%;
}
/deep/.el-menu-item.is-active {
  background-color: rgba(245, 108, 108, 0.2) !important;
}
.close {
  /deep/.el-submenu__title:hover {
    background-color: #f56c6c !important;
  }
}
</style>