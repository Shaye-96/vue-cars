<template>
  <div class="cars-wrapper">
    <div class="cars-swiper">
      <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide><carsItem height="820px"/></swiper-slide>
        <swiper-slide><carsItem /></swiper-slide>
        <swiper-slide><carsItem /></swiper-slide>
        <swiper-slide><carsItem /></swiper-slide>
        <swiper-slide><carsItem /></swiper-slide>
        <swiper-slide><carsItem /></swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
      <div class="swiper-button-next" slot="button-next" @click="next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.min.css";
import carsItem from "@c/carsItem/index.vue";
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
        spaceBetween: 50,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next"
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    prev() {
      this.swiper.slidePrev();
    },
    next() {
      this.swiper.slideNext();
    }
  }
};
</script>

<style lang="scss">
@import "./index.scss";
</style>