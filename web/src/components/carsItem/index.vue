<template>
  <div>
    <section class="cars-item">
      <header>
        <h4 class="cars-logo">
          <img class="logo" src="../../assets/images/car_logo.jpg" alt="" />
        </h4>
        <span class="name">Mustang 2019款</span>
        <span class="details">新能源汽车 5座</span>
      </header>
      <div class="cars-content">
        <img src="../../assets/images/car.png" alt="" />
        <div class="car-info">
          <div>
            <div class="cars-number">粤 B745N8</div>
            <ul class="eletic acitve-li-3">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <span class="distance">约 <span class="kilo">600</span> KM</span>
          </div>
        </div>
      </div>
      <footer>
        <a class="paking" href="">某某某停车场</a>
      </footer>
    </section>
    <div class="cars-item cars-details" :style="'height:' + height">
      <h4 class="paking"><a class="paking" href="">某某某停车场</a></h4>
      <header>
        <h4 class="cars-logo">
          <img class="logo" src="../../assets/images/car_logo.jpg" alt="" />
        </h4>
        <span class="name">Mustang 2019款</span>
        <span class="details">新能源汽车 5座</span>
      </header>
      <img class="cars" src="../../assets/images/car.png" alt="" />
      <div class="cars-desc">
        <span class="number">粤B745N8</span>
        <span class="distance">约 <span class="kilo">600</span> KM</span>
      </div>
      <div class="ele-wrap">
        <div class="ele">
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "carsItem",
  props: {
    height: {
      type: [String, Number],
      default: "257px"
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>