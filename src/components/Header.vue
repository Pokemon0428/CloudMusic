<template>
  <!-- <div class="header" @click="changeTheme">
    <div class="header-left"></div>
    <p class="header-title">网易云音乐</p>
    <div class="header-right" @click.stop="accountClick"></div>
  </div> -->

  <div class="header" @click="changeTheme">
    <!-- 不能直接给插槽设置样式 -->
    <div class="left">
      <slot name="left">左</slot>
    </div>
    <slot name="center">中</slot>
    <div class="right">
      <slot name="right">右</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    };
  },
  methods: {
    changeTheme () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/variable.scss";
  @import "../assets/css/mixin.scss";
  .header {
    width: 100%;
    height: 100px;
    @include bg_color();
    display: flex;
    justify-content: space-between;
    .left, .right {
      width: 84px;
      height: 84px;
      margin-top: 8px;
      * {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>