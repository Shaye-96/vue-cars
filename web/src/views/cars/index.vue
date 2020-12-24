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
            <span>约 <span class="kilo">600</span> KM</span>
          </div>
        </div>
      </div>
      <footer>
        <a class="paking" href="">某某某停车场</a>
      </footer>
    </section>
    <!-- <swiper class="swiper" :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <swiper-slide>Slide 10</swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.min.css";
import carsItem from "@c/carsItem/index.vue"
export default {
  name: "Cars",
  components: {
    carsItem,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  mounted() {}
};
</script>

<style lang="scss">
.cars-wrapper {
    position: fixed;
    left: 0;
    bottom: 94px;
    width: 100%;
    z-index: 11;
}
</style>