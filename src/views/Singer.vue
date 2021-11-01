<template>
  <div class="singer">
    <ScrollView ref="scrollView">
      <ul class="list-wrapper">
        <li class="list-group" v-for="(value, index) in list" :key="index" ref="group">
          <h2 class="group-title">{{keys[index]}}</h2>
          <ul>
            <li class="group-item" v-for="obj in list[index]" :key="obj.id">
              <img v-lazy="obj.img1v1Url" alt="">
              <p>{{obj.name}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </ScrollView>
    <ul class="list-keys">
      <li v-for="(key, index) in keys" :key="key" @click.stop="keyDown(index)" :class="{'active': currentIndex === index}">{{key}}</li>
    </ul>
  </div>
</template>

<script>
// import { getHotArtists } from '../api/index'
// import { getLetterArtists } from '../api/index'
import { getAllArtists } from '../api/index'

import ScrollView from '../components/ScrollView'
export default {
  name: 'Singer',
  created () {
    getAllArtists()
      .then((result) => {
        console.log(result)
        this.keys = result.keys
        this.list = result.list
      }).catch ((err) => {
        console.log(err)
      }) 
  },
  data() {
    return {
      keys: [],
      list: [],
      groupsTop: [],
      currentIndex: 0
    };
  },
  components: {
    ScrollView
  },
  watch: {
    list () {
      // 注意点： watch只能监听数据的变化， 数据变化的时候不一定已经渲染完了
      //         所以为了保证是渲染完成之后再去获取， 我们可以借助Vue的$nextTick方法来实现
      //         也就是说在$nextTick回调函数中一定能拿到渲染完成的数据，因为$nextTick的回调函数只有渲染完成后才会执行
      this.$nextTick(() => {
        this.$refs.group.forEach((group) => {
          this.groupsTop.push(group.offsetTop)
        })
        console.log(this.groupsTop)
      });
    }
  },
  methods: {
    keyDown (index) {
      this.currentIndex = index
      let offsetY = this.groupsTop[index]
      this.$refs.scrollView.scrollTo(0, -offsetY)
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/css/variable";
  @import "../assets/css/mixin";
  .singer {
    position: fixed;
    top: 184px;
    bottom: 0;
    left: 0;
    right: 0;
    @include bg_sub_color();
    overflow: hidden;
    .list-wrapper {
      // width: 100%;
      // height: 100%;
      .list-group {
        .group-title {
          @include bg_color();
          @include font_size($font_medium);
          color: #fff;
          padding: 10px 20px;
          box-sizing: border-box;
        }
        .group-item {
          display: flex;
          justify-content: start;
          padding: 10px 20px;
          border-bottom: 1px solid #ccc;
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
          }
          p {
            @include font_size($font_medium);
            @include font_color();
            display: flex;
            align-items: center;
            margin-left: 20px;
          }
        }
      }
    }
    .list-keys {
      position: fixed;
      right: 10px;
      top: 60%;
      transform: translateY(-50%);
      li {
        @include font_color();
        @include font_size($font_medium_s);
        padding: 3px 0;
        text-align: center;
        &.active{
          text-shadow: 0 0 10px #000;
        }
        &.active {
          text-shadow: 0 0 10px #000;
        }
      }
    }
  }
</style>