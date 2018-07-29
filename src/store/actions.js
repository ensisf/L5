import axios from '@/axios'

export default {
  loadUsers: ({ commit }) => {
    axios
      .get('/users')
      .then(({ data }) => commit('setUsers', data))
      .catch(error => console.log(error))
  }
}
