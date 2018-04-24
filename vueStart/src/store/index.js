import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  adminInfo: {
    login: 'error'
  },
}

const mutations = {
  saveAdminInfo(state, adminInfo) {
    state.adminInfo = adminInfo;
  }
}

const actions = {
  async getAdminData({commit}) {
    const res = {
      state: 1,
      login: 'success'
    }
    if (res.state == 1) {
      commit('saveAdminInfo', res.data);
    }
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
