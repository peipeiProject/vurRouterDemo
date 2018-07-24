<template>
  <swiper :options="swiperOption" class="la">
    <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
      <!--{{ slide }}-->
      <img :src=' slide '/>
    </swiper-slide>
    <p class="swiper-pagination" slot="pagination"></p></swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: "swipers",
    data() {
      return {
        swiperOption: {
          autoplay: true,//自动切换

          pagination: {
            el: '.swiper-pagination'//分页器
          }
        },
        swiperSlides: ["../static/4.jpg", "../static/5.jpg", "../static/2.jpg"]
      }
    },
    components: {
      swiper,
      swiperSlide
    },
  }

</script>

<style>

  .la {
    width: 100%;
    height: 200px;
  }

  .la img {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    bottom: 0;
  }
</style>
