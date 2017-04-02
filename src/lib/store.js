import Vue from 'vue'
import Vuex from 'vuex'
import { authentication, database, storage } from './application.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: authentication.currentUser || null,
    ideas: [],
    tags: []
  },
  getters: {
    userProfile(state) {
      return (!!state.user) ? 'user' : 'guest'
    },
    user(state) {
      return state.user
    }
  },
  mutations: {
    'add-user'(store, user) {
      store.user = user
    }
  },
  actions: {
    async signIn({ commit }, email, password) {
      let user = await authentication.signInWithEmailAndPassword(email, password)
      commit('add-user', user)
      console.log(user)
    }
  }
})

export default store
