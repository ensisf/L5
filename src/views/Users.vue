<template>
  <div>
    <rows-per-page class="row mb-2" v-if="!users.length"></rows-per-page>
    <div class="alert alert-warning" v-if="!users.length">Загрузка данных</div>
    <user-list 
      v-else
      :users="users"
    ></user-list>
    <pagination v-if="!users.length"></pagination>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'users',
  components: {
    'user-list': () => import('@/components/UserList.vue'),
    'rows-per-page': () => import('@/components/RowsPerPageSelect.vue'),
    pagination: () => import('@/components/Pagination.vue')
  },
  data: () => ({
    users: []
  }),
  mounted() {
    this.getUsers()
  },
  methods: {
    getUsers() {
      axios
        .get(`/users`)
        .then(({ data }) => (this.users = data))
        .catch(error => console.log(error))
    }
  }
}
</script>
