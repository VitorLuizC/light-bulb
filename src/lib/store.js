import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: undefined,
    ideas: [],
    tags: []
  },
  getters: {
    profile(state) {
      return (!!state.user) ? 'user' : 'guest'
    },
    user(state) {
      return state.user
    }
  },
  mutations: {
    'update-user'(store, user) {
      store.user = user
    }
  }
})

export default store
