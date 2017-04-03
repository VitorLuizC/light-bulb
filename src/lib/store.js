import Vue from 'vue'
import Vuex from 'vuex'
import { authentication, database, storage } from './application.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
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
    'update-user'(store, user) {
      store.user = user
    }
  },
  actions: {
    async signIn({ commit }, user) {
      let firebaseUser = await authentication.signInWithEmailAndPassword(user.email, user.password)
      commit('update-user', firebaseUser)
    },
    async signUp({ commit }, user) {
      let { email, password } = user
      let wut = await authentication.createUserWithEmailAndPassword(email, password)
    }
  }
})

export default store
