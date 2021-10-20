<template>
  <swiper :options="swiperOption" class="banner">
    <!-- slides -->
    <swiper-slide class="cd">
      <div class="cd-wrapper" ref="cdWrapper">
        <img src="https://wx3.sinaimg.cn/orj360/001R0E0aly1gvkgcgpuz7j612y0u07de02.jpg" alt="">
      </div>
      <p>65456asadaasdasdasdasdasd</p>
    </swiper-slide>
    <swiper-slide class="lyric" ref="lyric">
      <ScrollView ref="scrollView">
        <ul>
          <!-- <li v-for="(value, key) in currentLyric" :key="key" :class="{'active' : currentLineNum === key}">{{value}}</li> -->
        </ul>
      </ScrollView>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/swiper-bundle.css'
import { swiper, swiperSlide} from 'vue-awesome-swiper'
import ScrollView from '../ScrollView'
export default {
  name: 'PlayerMiddle',
  components: {
    swiper,
    swiperSlide,
    ScrollView
  },

  data() {
    return {
      swiperOption: {
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true
      },
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";
  .banner {
    position: fixed;
    top: 150px;
    bottom: 250px;
    left: 0;
    right: 0;
    .cd {
      .cd-wrapper {
        display: block;
        margin: 0 auto;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        border: 30px solid #fff;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        text-align: center;
        @include font_size($font_medium);
        @include font_color();
        margin-top: 50px;
      }
    }
    .lyric {
      li {
        text-align: center;
        @include font_size($font_medium);
        @include font_color();
        margin: 10px 0;
        &:last-of-type{
          padding-bottom: 50%;
        }
        &.active{
          color: #fff;
        }
      }
    }
  }
</style>
<style lang="scss">
  @import "../../assets/css/mixin";
  .my-bullet{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #fff;
    margin: 0 20px;
  }
  .my-bullet-active{
    width: 60px;
    @include bg_color();
  }
</style>