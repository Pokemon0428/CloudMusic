<template>
  <ul class="detail-bottom">
    <li class="bottom-top">
      <div class="bottom-icon"></div>
      <div class="bottom-title">播放全部</div>
    </li>
    <li v-for="value in playlist" :key="value.id" class="item" @click="selectMusic">
      <h3>{{value.name}}</h3>
      <p>{{value.al.name}} - {{value.ar[0].name}}</p>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Detailbottom',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    ...mapActions([
      'setFullScreen'
    ]),
    selectMusic () {
      this.setFullScreen(true)
    }
  },

  props: {
    playlist: {
      type: Array,
      default: () => [],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";
  .detail-bottom {
    width: 100%;
    li {
      width: 100%;
      height: 100px;
      padding: 20px;
      box-sizing: border-box;
      @include bg_sub_color()
    }
    .bottom-top {
      display: flex;
      align-items: center;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      .bottom-icon {
        width: 60px;
        height: 60px;
        margin-right: 20px;
        @include bg_img('../../assets/images/small_play')
      }
      .bottom-title {
        @include font_color();
        @include font_size($font_large)
      }
    }
    .item {
      h3{
        @include font_color();
        @include font_size($font_medium);
        @include no-wrap();
      }
      p{
        @include font_color();
        @include font_size($font_samll);
        @include no-wrap();
        margin-top: 10px;
        opacity: 0.8;
      }
    }
  }
</style>