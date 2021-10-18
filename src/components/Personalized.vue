<template>
  <div class="personalized">
    <div class="personalized-top">
      <h3>{{title}}</h3>
    </div>
    <div class="personalized-list">
      <div class="item" v-for="value in personalized" :key=value.id @click="selectItem(value.id)">
        <img v-lazy=value.picUrl alt="">
        <p>{{value.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personalized',

  data() {
    return {
      
    };
  },

  props: {
    personalized: {
      type: Array,
      default: () => [],
      // 定义该 prop 是否是必填项
      required: true
    },
    title: {
      type: String,
      default: '' ,
      // 定义该 prop 是否是必填项
      required: true
    },
    type: {
      type: String,
      default: '' ,
      // 定义该 prop 是否是必填项
      required: true
    }
  },

  mounted() {
    
  },

  methods: {
    selectItem(id) {
      this.$emit('select', id, this.type)
    }
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/css/variable.scss";
  @import "../assets/css/mixin.scss";
  .personalized {
    @include bg_sub_color();
    .personalized-top {
      width: 100%;
      height: 84px;
      line-height: 84px;
      @include bg_sub_color();
      border-bottom: 1px solid #ccc;
      h3 {
        @include font_size($font_large);
        font-weight: bold;
      }
    }
    .personalized-list {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .item {
        width: 200px;
        padding: 20px 0;
        img {
          width: 200px;
          height: 200px;
          border-radius: 20px;
        }
        p {
          @include clamp(2);
          @include font_color();
          @include font_size($font_medium_s);
          text-align: center;
          margin-top: 10px;
        }
      }
    }
  }
</style>