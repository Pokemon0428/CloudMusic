<template>
  <Header class="header">
    <div slot="left" class="header-left" @click.stop="back"></div>
    <p slot="center" class="header-title">{{title}}</p>
    <div slot="right" class="header-right"></div>
  </Header>
</template>

<script>
import Header from '../Header'
export default {
  name: "SubHeader",
  components: {
    Header
  },
  data() {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    };
  },
  methods: {
    back () {
      window.history.back()
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/variable.scss";
  @import "../../assets/css/mixin.scss";
  .header {
    .header-left {
      @include bg_img('../../assets/images/back')
    }
    .header-right {
      @include bg_img('../../assets/images/more')
    }
    .header-title {
      color: #fff;
      font-weight: bold;
      text-align: center;
      line-height: 100px;
      @include font_size($font_medium);
      @include no-wrap()
    }
  }
</style>