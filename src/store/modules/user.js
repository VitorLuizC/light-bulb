import { auth } from 'firebase'
import { database, authentication } from '../../application.js'
import { USER_UPDATE } from '../types.js'

export const state = {
  isSubscribing: false,
  user: getDefaultUser()
}

export const getters = {
  user: ({ user }) => user,
  isAutheticated: ({ user }) => user.id === null,
  isSubscribing: ({ isSubscribing }) => isSubscribing
}

export const mutations = {
  [TOGGLE_SUBSCRIBING](store) {
    store.isSubscribing = !store.isSubscribing
  },
  [USER_UPDATE](store, payload) {
    store.user = { ...store.user, ...payload }
  }
}

export const actions = {
  signIn({ commit }, payload) {
    switch (payload.provider) {

    }
  },
  signOut({ commit, dispatch }) {
    try {
      await authentication.signOut()
      commit(USER_UPDATE, getDefaultUser())
    } catch (error) {
      dispatch('error/showError', error, { root: true })
    }
  }
}

function getDefaultUser() {
  return {
    id: null,
    name: '',
    email: '',
    picture: ''
  }
}
