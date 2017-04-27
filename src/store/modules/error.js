import { ERROR_UPDATE, ERROR_HIDE, ERROR_SHOW } from '../types.js'

export const state = {
  error: null
}

export const getters = {
  [ERROR_STATE]: ({ error }) => !!error,
  [ERROR_MESSAGE]: ({ error }) => error
}

export const mutations = {
  [ERROR_UPDATE](store, payload) {
    if (payload instanceof Error)
      store.error = payload.message
    else
      store.error = payload
  }
}

export const actions = {
  [ERROR_HIDE]({ commit }) {
    commit(ERROR_UPDATE, null)
  },
  [ERROR_SHOW]({ commit }, payload) {
    commit(ERROR_UPDATE, payload)
  }
}
