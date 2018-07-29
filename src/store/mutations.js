export default {
  changeTitle: (state, payload) => (state.siteName = payload),
  changeUserName: (state, payload) => (state.userProfile.name = payload),
  changeUserLastname: (state, payload) => (state.userProfile.lastname = payload),
  changeUserEmail: (state, payload) => (state.userProfile.email = payload),
  setUsers: (state, payload) => (state.users = payload)
}
