<template>
  <div class="cars-wrapper">
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
            <ul class="eletic">
              <li class="active"></li>
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
            <span>约 <span class="kilo">600</span> KM</span>
          </div>
        </div>
      </div>
      <footer></footer>
    </section>
  </div>
</template>

<script>
export default {
  name: "Cars",
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "./index.scss";
</style>