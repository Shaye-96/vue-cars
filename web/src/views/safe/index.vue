<template>
  <div class="user-wrapper">
    <HeadBack :title="'安全设置'"/>
    <ul class="user-func">
      <router-link to="/password" tag="a" class="arrow">修改登录密码</router-link>
      <router-link to="/fund" tag="a" class="arrow">设置资金密码</router-link>
      <router-link to="/mobile" tag="a" class="arrow">绑定手机号</router-link>
      <router-link to="/bindcard" tag="a" class="arrow">绑定银行卡</router-link>
    </ul>
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
.user-func {
  color: #9a9c9e;
  a {
    position: relative;
    display: block;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
    padding: 25px 30px;
    color: rgba($color: #fff, $alpha: 0.4);
    font-size: 15px;
    font-weight: lighter;
  }
  .arrow::after {
    content: "";
    position: absolute;
    right: 26px;
    top: 50%;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.5);
    border-right: 1px solid rgba($color: #fff, $alpha: 0.5);
    @include webkitB(transform, rotate(-45deg));
    @include webkitB(box-sizing, border-box);
  }
  .icon {
    width: 30px;
    height: 30px;
    margin-bottom: -10px;
    margin-right: 20px;
  }
}
</style>