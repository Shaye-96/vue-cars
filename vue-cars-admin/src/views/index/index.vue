<template>
  <div id="index-wrapper">
    <el-container>
      <el-aside width="250px">Aside</el-aside>
      <el-container>
        <el-header height="75px">
          <i class="icon icon-home"></i>
          <div class="flex-right">
            <img src="../../assets/images/header-icon.jpg" alt="" />
            <span>管理员管理员管理员</span>
            <i class="icon icon-logout"></i>
          </div>
        </el-header>
        <el-main>
          <div class="main-wrapper">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#index-wrapper {
  height: 100%;
  .el-container {
    height: 100%;
  }
}
.el-aside {
  background-color: #344a5f;
}
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  @include webkitB(box-shadow, 6px 6px 16px 0 rgba(255, 255, 255, 0.5));
  .icon-home {
    width: 22px;
    height: 16px;
  }
  .icon-logout {
    width: 18px;
    height: 18px;
  }
  .flex-right {
    display: flex;
    align-items: center;
    img {
      width: 36px;
      height: 36px;
      @include webkitB(border-radius, 100%);
    }
    span {
      position: relative;
      margin: 0 50px 0 18px;
      &::after {
        content: "";
        position: absolute;
        top: -30px;
        right: -22px;
        display: inline-block;
        height: 75px;
        border-left: 1px solid #ededed;
      }
    }
  }
}
.el-main {
  background-color: #f4f4f4;
}
.main-wrapper {
  height: 100%;
  padding: 30px;
  background-color: #fff;
  @include webkitB(box-sizing, border-box);
}
</style>