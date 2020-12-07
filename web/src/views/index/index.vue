<template>
  <div>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="scss">
.amap-wrapper {  
  width: 100%;
  height: 100vh;
}
</style>