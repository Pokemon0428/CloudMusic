import {
  SET_FULL_SCREEN,
  SET_MINI_PLAYER,
  SET_LIST_PLAYER,
  SET_IS_PLAYING,
  SET_MODE_TYPE,
  SET_SONG_DETAIL,
  SET_SONG_LYRIC,
} from './mutations-type'

import {
  getSongDetail, 
  getSongLyric,
} from '../api/index'

export default {
  // setFullScreen ({ commit }, flag) {
  //   commit('changeFullScreen', flag)
  // }
  setFullScreen ({ commit }, flag) {
    commit(SET_FULL_SCREEN, flag)
  },

  setMiniPlayer ({ commit }, flag) {
    commit(SET_MINI_PLAYER, flag)
  },

  setListPlayer ({ commit }, flag) {
    commit(SET_LIST_PLAYER, flag)
  },

  setIsPlaying ({ commit }, flag) {
    commit(SET_IS_PLAYING, flag)
  },

  setModeType ({ commit }, flag) {
    commit(SET_MODE_TYPE, flag)
  },

  async setSongDetaile ({ commit }, ids) {
    let result = await getSongDetail({ids: ids.join(',')})
    // console.log(result)
    let list = []
    result.songs.forEach(function (value) {
      let obj = {}
      obj.id = value.id
      obj.name = value.name
      let singer = ''
      value['ar'].forEach(function (item, index) {
        if (index === 0) {
          singer = item.name
        } else {
          singer += '-' + item.name
        }
      })
      obj.singer = singer
      obj.picUrl = value['al'].picUrl
      list.push(obj)
    }) 
    commit(SET_SONG_DETAIL, list)
  },

  async getSongLyric ({ commit }, id) {
    let result = await getSongLyric({ id: id })
    console.log(result.lrc.lyric)
    // let obj = parseLyric(result.lrc.lyric)
    commit(SET_SONG_LYRIC, result)
  },
}