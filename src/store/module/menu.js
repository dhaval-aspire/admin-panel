import * as types from '../mutation-types'
import { MENU_STATUS } from '../constant'

const state = {
  'menuState': MENU_STATUS.close
}
const getters = {
  menuEvent: function (store) {
    return store.menuState
  }
}

const mutations = {
  [types.OPEN_MENU_EVENT] (store) {
    store.menuState = MENU_STATUS.open
  },
  [types.CLOSE_MENU_EVENT] (store) {
    store.menuState = MENU_STATUS.close
  }
}

export default {
  state,
  getters,
  mutations
}
