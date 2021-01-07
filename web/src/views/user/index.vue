<template>
  <div class="user-wrapper">
    <div class="user-info">
      <img src="../../assets/images/user-head.png" alt="" />
      <div>
        <div class="user-name">1151032202@qq.com</div>
        <div class="user-score">文明驾驶分 0</div>
      </div>
    </div>
    <ul class="user-func">
      <router-link to="aa" tag="a"><i class="icon icon-money-link"></i>我的账户</router-link>
      <router-link to="aa" tag="a"><i class="icon icon-order-link"></i>租车订单</router-link>
      <router-link to="aa" tag="a"><i class="icon icon-authentication-link"></i>实名认证</router-link>
      <router-link to="aa" tag="a"><i class="icon icon-security-link"></i>安全设置</router-link>
      <router-link to="aa" tag="a"><i class="icon icon-helpcenter-link"></i>帮助中心</router-link>
    </ul>
    <a class="log-out" href="javascript:(o)">登出</a>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
.user-info {
  color: #fff;
  display: flex;
  margin-top: 60px;
  padding: 24px 40px;
  // align-items: center;
  & > div {
    margin: 0 17px;
  }
  & > img {
    width: 84px;
    height: 84px;
    border: 6px solid #2f343a;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .user-name {
    color: #44484c;
    font-size: 18px;
    font-weight: lighter;
    padding: 12px 0;
  }
  .user-score {
    display: inline-block;
    font-size: 14px;
    padding: 6px 17px;
    background-color: #11a5f8;
    border-radius: 12px;
  }
}
.user-func {
  color: #9a9c9e;
  margin: 60px 0;
  a {
    display: block;
    border-bottom: 1px solid rgba($color: #fff, $alpha: .3);
    padding: 25px 30px;
    color: rgba($color: #fff, $alpha: .4);
    font-size: 15px;
    font-weight: lighter;
  }
  .icon{
    width: 30px;
    height: 30px;
    margin-bottom: -10px;
    margin-right: 20px;
  }
}
.log-out {
  position: absolute;
  left: 50%;
  bottom: 60px;
  font-size: 18px;
  font-weight: lighter;
  color: white;
  background-color: #2d3339;
  margin: 50px auto 0;
  padding: 20px 64px;
  @include webkitB(border-radius, 42px);
  @include webkitB(transform, translateX(-50%));
}
</style>