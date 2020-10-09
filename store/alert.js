export const state = () => ({
  message: null
})

export const getters = {
  message (state) {
    return state.message
  }
}

export const mutations = {
  SET_MESSAGE (state, message) {
    state.message = message
  }
}

export const actions = {
  flash ({ commit }, message) {
    commit('SET_MESSAGE', message)
  },

  clear ({ commit }) {
    commit('SET_MESSAGE', null)
  }
}
