<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :banners="banners"></Banner>
        <Personalized :personalized="personalized" :title="'推荐歌单'"></Personalized>
        <Personalized :personalized="albums" :title="'最新专辑'"></Personalized>
        <NewSongs :songs="songs"></NewSongs>
      </div>
    </ScrollView>
  </div>
</template>

<script>
import {getBanner, getPersonalized, getNewAlbum, getNewSong} from "../api/index"
import Banner from '../components/Banner.vue'
import Personalized from '../components/Personalized.vue'
import NewSongs from '../components/NewSongs'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Recommend',
  components: {
    Banner,
    Personalized,
    NewSongs,
    ScrollView
  },
  data() {
    return {
      banners: [],
      personalized: [],
      albums: [],
      songs: []
    };
  },
  created() {
    getBanner().then((data) => {
      this.banners = data.banners
    }).catch(function (err) {
      console.log(err)
    })

    getPersonalized().then((data) => {
      this.personalized = data.result
    }).catch(function (err) {
      console.log(err)
    })

    getNewAlbum().then((data) => {
      this.albums = data.albums.splice(0, 6)
    }).catch(function (err) {
      console.log(err)
    })

    getNewSong().then((data) => {
      // console.log(data)
      // this.songs = data.result
      let list = []
      data.result.forEach((value) => {
        let obj = {}
        obj.id = value.id
        obj.name = value.name
        obj.picUrl = value.song.album.picUrl
        let singer = ''
        for (let i = 0; i < value.song['artists'].length; i++) {
          if (i === 0) {
            singer = value.song['artists'][i].name
          } else {
            singer += '-' + value.song['artists'][i].name
          }
        }
        obj.singer = singer
        list.push(obj)
      })
      this.songs = list
    }).catch(function (err) {
      console.log(err)
    })
  },


  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
  .recommend{
    position: fixed;
    top: 184px;
    left: 0;
    right: 0;
    bottom: 0;
    /*overflow: hidden;*/
    .recommend-warpper{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }
</style>