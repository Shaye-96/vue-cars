<template>
  <div class="amap-wrapper">
    <el-amap
      class="amap-demo"
      :vid="'amapDemo'"
      :amap-manager="amapManager"
      :events="events"
    ></el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
let amapManager = new AMapManager();

export default {
  name: "Amap",
  data() {
    return {
      map: null,
      // zoom 地图初始化缩放比例
      zoom: 18,
      amapManager,
      events: {}
    };
  },
  mounted() {
    let _this = this;
    // 创建地图实例，并保存到map(高德地图原生api)
    lazyAMapApiLoaderInstance.load().then(() => {
      _this.map = new AMap.Map("amapDemo", {
        center: new AMap.LngLat(121.59996, 31.197646),
        zoom: _this.zoom
      });
    });
  }
};
</script>

<style lang="scss">
.amap-wrapper {
  height: 100vh;
}
</style>