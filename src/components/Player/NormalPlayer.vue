<template>
  <transition
  :css="false"
  @enter="enter"
  @leave="leave"
  >
    <div class="normal-player" v-show="this.isFullScreen">
    <div class="player-warpper">
      <PlayerHeader></PlayerHeader>
      <PlayerMiddle></PlayerMiddle>
      <PlayerBottom :totalTime='totalTime' :currentTime="currentTime"></PlayerBottom>
    </div>
    <div class="player-bg">
      <img :src="currentSong.picUrl" alt="">
    </div>
  </div>
</transition>
</template>

<script>
import PlayerHeader from "./PlayerHeader.vue"
import PlayerMiddle from "./PlayerMiddle.vue"
import PlayerBottom from "./PlayerBottom.vue"

import { mapGetters, mapActions } from 'vuex'

import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui'

export default {
  name: 'NormalPlayer',
  components: {
    PlayerHeader,
    PlayerMiddle,
    PlayerBottom
  },
  computed: {
    ...mapGetters([
      'isFullScreen',
      'currentSong'
    ])
  },
  methods: {
    ...mapActions([
      'getSongLyric'
    ]),
    enter (el, done) {
      Velocity(el, 'transition.shrinkIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.shrinkOut', { duration: 500 }, function () {
        done()
      })
    }
  },
  watch: {
    currentSong (newValue, oldValue) {
      if (newValue.id === undefined) {
        return
      }
      console.log(newValue.id)
      this.getSongLyric(newValue.id)
    }
  },
  props: {
    totalTime: {
      type: Number,
      default: 0,
      required: true
    },
    currentTime: {
      type: Number,
      default: 0,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";
  .normal-player {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    @include bg_sub_color();
    .player-warpper {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 999;
    }
    .player-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        filter: blur(10px);
      }
    }
  }
</style>