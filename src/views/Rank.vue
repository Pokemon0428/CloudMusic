<template>
  <div class="rank">
    <ScrollView>
      <ul>
        <li v-for="(value, key) in category.titles" :key="key">
          <h3 class="group-title">{{value}}</h3>
          <ul class="normal-group" v-if="value === '官方榜'">
            <li v-for="obj in category[key]" :key="obj.rank.id">
              <div class="rank-left">
                <img v-lazy="obj.rank.coverImgUrl" alt="">
                <p>{{obj.rank.updateFrequency}}</p>
              </div>
              <div class="rank-right">
                <p v-for="(song, index) in obj.rank.tracks" :key="song.first">{{index+1}}.{{song.first}}-{{song.second}}</p>
              </div>
            </li>
          </ul>
          <ul class="other-group" v-else>
            <li v-for="obj in category[key]" :key="obj.rank.id">
              <div class="rank-top">
                <img v-lazy="obj.rank.coverImgUrl" alt="">
                <p>{{obj.rank.updateFrequency}}</p>
              </div>
              <div class="rank-bottom">
                <p>{{obj.name}}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </ScrollView>
  </div>
</template>

<script>
import { getTopListDetail } from '../api/index'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Rank',
  data() {
    return {
      category: {}
    }
  },
  created () {
    getTopListDetail ()
      .then((data) => {
        console.log(data)
        this.category = data
      })
      .catch((err) => {
        console.log(err)
      })
  },
  components: {
    ScrollView
  }
};
</script>

<style lang="scss" scoped>
  @import "../assets/css/variable.scss";
  @import "../assets/css/mixin.scss";
  .rank {
    position: fixed;
    left: 0;
    right: 0;
    top: 184px;
    bottom: 0;
    @include bg_sub_color();
    overflow: hidden;
    .group-title {
      padding: 10px 20px;
      @include font_color();
      @include font_size($font_large);
      font-weight: bold;
    }
    .normal-group {
      li {
        display: flex;
        padding: 10px 20px;
        box-sizing: border-box;
        align-items: center;
        .rank-left {
          position: relative;
          img {
            width: 200px;
            height: 200px;
            border-radius: 10px;
          }
          p {
            position: absolute;
            left: 10px;
            bottom: 10px;
            color: #fff;
            @include font_size($font_medium_s);
          }
        }
        .rank-right {
          margin-left: 20px;
          p {
            @include font_color();
            @include font_size($font_medium_s);
            padding: 10px 0;
          }
        }
      }

    }
    .other-group {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        padding: 10px 20px;
        box-sizing: border-box;
      }
      .rank-top {
        position: relative;
        img {
          width: 200px;
          height: 200px;
          border-radius: 10px;
        }
        p {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 10px;
          margin: auto;
          text-align: center;
          color: #fff;
          @include font_size($font_medium_s);
        }
      }
      .rank-bottom {
        width: 200px;
        @include no-wrap();
        p {
          @include font_color();
          @include font_size($font_medium_s);
          text-align: center;
          padding: 10px 0;
        }
      }
    }
  }
</style>