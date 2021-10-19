<template>
  <div class="detail">
    <SubHeader :title="playlist.name"></SubHeader>
    <DetailTop :path="playlist.coverImgUrl" ref="top"></DetailTop>
    <div class="bottom">
      <ScrollView ref="scrollview">
        <DetailBottom :playlist="playlist.tracks"></DetailBottom>
      </ScrollView>
    </div>
  </div>
</template>

<script>
import SubHeader from '../components/Detail/SubHeader.vue'
import DetailTop from '../components/Detail/DetailTop'
import DetailBottom from '../components/Detail/DetailBottom'
import ScrollView from '../components/ScrollView.vue'

import {getPlayList, getAlbum} from "../api/index"
export default {
  name: 'Detail',

  data() {
    return {
      playlist: {}
    };
  },
  components: {
    SubHeader,
    DetailTop,
    DetailBottom,
    ScrollView
  },

  created() {
    if (this.$route.params.type === 'personalized') {
      getPlayList({id: this.$route.params.id}).then((data) => {
        console.log(data.playlist.tracks)
        this.playlist = data.playlist
      }).catch(function (err) {
        console.log(err)
      })
    } else if (this.$route.params.type === 'album') {
      getAlbum({id: this.$route.params.id}).then((data) => {
        console.log(data)
        this.playlist = {
          name: data.album.name,
          coverImgUrl: data.album.picUrl,
          tracks: data.songs
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
    
  },

  mounted() {
    let defaultHeight = this.$refs.top.$el.offsetHeight
    this.$refs.scrollview.scrolling((offsetY) => {
      if (offsetY < 0) {
        let scale = Math.abs(offsetY) / defaultHeight
        // this.$refs.top.$el.style.filter = `blur(${scale}px)`
        this.$refs.top.changeMask(scale)

      } else {
        let scale = 1 + offsetY / defaultHeight
        this.$refs.top.$el.style.transform = `scale(${scale}`
      }
    })
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/css/variable.scss";
  @import "../assets/css/mixin.scss";
  .detail {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    @include bg_sub_color();
    .bottom {
      position: fixed;
      top: 500px;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>