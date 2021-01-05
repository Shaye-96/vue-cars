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
      <div class="scroll">
        <h4 class="paking flex justify-between align-center">
        <a class="paking" href="">某某某停车场</a>
        <span  style="opacity: .8;">关闭</span>
        </h4>
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
        <div class="ele-active" :style="'width:' + eleWidth"></div>
        <div class="ele"></div>
      </div>
      <p class="tips">取车约支付12.0元停车费，实际补贴12.0元</p>
      <ul>
        <li v-for="item in 4" :key="item" :class="[isActive == item ? 'item flex justify-between align-center current' : 'item flex justify-between align-center']">
          <h4>日租车</h4>
          <p>￥300/1天</p>
        </li>
      </ul>
      <div class="clause flex justify-between align-center">
        <p>参保《全面保障服务》用车更放心</p>
        <div><i class="active"></i><i></i></div>
      </div> 
      <button class="cars-order">预约用车</button>
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
    },
    eleWidth: {
      type: [String, Number],
      default: "50%"
    }
  },
  data() {
    return {
      isActive: 1
    }
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>