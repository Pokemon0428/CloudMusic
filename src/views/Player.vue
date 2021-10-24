<template>
  <div class="player">
    <NormalPlayer></NormalPlayer>
    <MiniPlayer></MiniPlayer>
    <ListPlayer></ListPlayer>
    <audio  :src="currentSong.url" ref="audio"></audio>
  </div>
</template>

<script>
import NormalPlayer from "../components/Player/NormalPlayer.vue"
import MiniPlayer from "../components/Player/MiniPlayer.vue"
import ListPlayer from "../components/Player/ListPlayer.vue"

import { mapGetters, mapActions } from 'vuex'
import mode from '../store/modeType'
export default {
  name: 'Player',
  components: {
    NormalPlayer,
    MiniPlayer,
    ListPlayer
  },
  computed: {
    ...mapGetters([
      'currentSong',
    ])
  },
};
</script>

<style lang="scss" scoped>

</style>