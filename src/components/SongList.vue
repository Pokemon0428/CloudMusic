<template>
  <ul class="song-list">
    <li v-for="value in songs" :key="value.id" class="item">
      <img v-lazy=value.picUrl alt="">
      <div>
        <h3>{{value.name}}</h3>
        <p>{{value.singer}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SongList',

  data() {
    return {
      
    };
  },

  props: {
    songs: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/css/variable.scss";
  @import "../assets/css/mixin.scss";
  .song-list {
    width: 100%;
    overflow: hidden;
    .item{
      width: 100%;
      height: 150px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      /*margin-bottom: 20px;*/
      border-bottom: 1px solid #ccc;
      img{
        width: 100px;
        height: 100px;
        border-radius: 20px;
        margin-right: 20px;
      }
      div{
        width: 70%;
        h3{
          @include font_size($font_large);
          @include font_color();
          @include no-wrap();
        }
        p{
          @include font_size($font_samll);
          @include font_color();
          @include no-wrap();
          opacity: 0.6;
          margin-top: 20px;
        }
      }
    }
  }
</style>