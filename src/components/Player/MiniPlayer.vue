<template>
  <transition
  :css="false"
  @enter="enter"
  @leave="leave"
  >
    <div class="mini-player" v-show="this.isShowMiniPlayer">
    <div class="player-warpper">
      <div class="player-left" @click="showNormalPlayer">
        <img src="https://wx3.sinaimg.cn/orj360/001R0E0aly1gvkgcgpuz7j612y0u07de02.jpg" alt="">
        <div class="player-title">
          <h3>演员</h3>
          <p>薛之谦</p>
        </div>
      </div>
      <div class="player-right">
        <div class="play" @click="play" ref="play"></div>
        <div class="list" @click.stop="showList"></div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MiniPlayer',

  data() {
    return {
      
    };
  },
  methods: {
    ...mapActions([
      'setFullScreen',
      'setMiniPlayer',
      'setIsPlaying'
    ]),
    showList() {
      this.$emit('showList');
    },
    showNormalPlayer () {
      this.setFullScreen(true)
      this.setMiniPlayer(false)
    },
    enter (el, done) {
      Velocity(el, 'transition.bounceUpIn', { duration: 500 }, function () {
        done()
      })
    },
    leave (el, done) {
      Velocity(el, 'transition.bounceDownOut', { duration: 500 }, function () {
        done()
      })
    },
    play () {
      this.setIsPlaying(!this.isPlaying)
    }
  },
  computed: {
    ...mapGetters([
      'isShowMiniPlayer',
      'isPlaying'
    ])
  },
  watch: {
    isPlaying (newValue, oldValue) {
      if (newValue) {
        this.$refs.play.classList.add('active')
      } else {
        this.$refs.play.classList.remove('active')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";
  .mini-player {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    .player-warpper {
      width: 100%;
      height: 100%;
      @include bg_color();
      display: flex;
      justify-content: space-between;
      align-items: center;
      .player-left {
        display: flex;
        padding-left: 30px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-right: 20px;
        }
        .player-title {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          h3{
            @include font_size($font_medium);
            @include font_color();
          }
          p{
            @include font_size($font_medium_s);
            @include font_color();
          }
        }
      }
      .player-right {
        display: flex;
        align-items: center;
        .play {
          width: 84px;
          height: 84px;
          @include bg_img('../../assets/images/pause');
          &.active {
            @include bg_img('../../assets/images/play');
          }
        }
        .list {
          width: 120px;
          height: 120px;
          @include bg_img('../../assets/images/list')
        }
      }
    }
  }
</style>