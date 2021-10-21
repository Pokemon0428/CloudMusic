<template>
  <div class="player">
    <NormalPlayer></NormalPlayer>
    <MiniPlayer></MiniPlayer>
    <ListPlayer></ListPlayer>
  </div>
</template>

<script>
import NormalPlayer from "../components/Player/NormalPlayer.vue"
import MiniPlayer from "../components/Player/MiniPlayer.vue"
import ListPlayer from "../components/Player/ListPlayer.vue"
export default {
  name: 'Player',

  data() {
    return {
      
    };
  },

  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },

  mounted() {
    
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>