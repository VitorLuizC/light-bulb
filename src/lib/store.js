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
    async signIn({ commit }, { email, password }) {
      try {
        commit('update-user', await authentication.signInWithEmailAndPassword(email, password))
      } catch (err) {
        console.log(err)
      }
    },
    async signOut() {
      try {
        await authentication.signOut()
        commit('update-user', null)
      } catch (err) {
        console.log(err)
      }
    },
    async signUp({ commit }, { name, email, password }) {
      try {
        let user = await authentication.createUserWithEmailAndPassword(email, password)
        await user.updateProfile({ displayName: name })
        commit('update-user', user)
      } catch (err) {
        console.log(err)
      }
    }
  }
})

export default store
