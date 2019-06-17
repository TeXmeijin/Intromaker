import firebase from 'firebase'

export default context => {
  if (process.browser) {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        context.store.commit('auth/setUser', null)
        return
      }
      context.store.commit('auth/setUser', user.providerData[0])
    })
  }
}
