<template>
  <div class="head-wrapper">
    <h4 class="title"><i class="icon" @click="goBack"></i>{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "headBack",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.head-wrapper {
  color: white;
  font-size: 16px;
  padding-left: 30px;
  padding-bottom: 61px;
  @include webkitB(box-sizing, border-box);
}
.title {
  height: 81px;
  position: relative;
  line-height: 81px;
  padding-left: 34px;
}
.icon {
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -17px;
  display: inline-block;
  width: 34px;
  height: 34px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -7px;
    display: inline-block;
    width: 11px;
    height: 11px;
    border-left: 3px solid #00a3ff;
    border-top: 3px solid #00a3ff;
    @include webkitB(transform, rotate(-45deg));
    @include webkitB(border-top-left-radius, 5px);
  }
}
</style>