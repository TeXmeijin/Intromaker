import firebase from 'firebase'

export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  login() {
    const provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  },
  logout({ commit }) {
    firebase.auth().signOut()

    commit('setUser', null)
  }
}
