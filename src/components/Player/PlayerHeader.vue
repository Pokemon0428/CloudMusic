<template>
  <div class="header">
    <div class="header-left"></div>
    <div class="header-title">
      <h3>演员</h3>
      <p>薛之谦</p>
    </div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'PlayerHeader',

  data() {
    return {
      
    };
  },

  props: {
    
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
  .header {
    width: 100%;
    height: 100px;
    // @include bg_color();
    display: flex;
    justify-content: space-between;
    // position: relative;
    // z-index: 999;
    .header-left, .header-right {
      width: 84px;
      height: 84px;
      margin-top: 8px;
    }
    .header-left {
      @include bg_img('../../assets/images/down')
    }.header-right {
      // @include bg_img('../../assets/images/more')
    }
    .header-title {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      color: #fff;
      // font-weight: bold;
      text-align: center;
      // line-height: 100px;
      @include font_size($font_medium);
      @include no-wrap()
    }
  }
</style>