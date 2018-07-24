<template>
  <div>    
    <div class="alert alert-warning" v-if="!users.length">Загрузка данных</div>
    <user-list 
      v-else
      :users="users">
      <template slot="table-th">
        <th>ID</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Еmail</th>
        <th>Телефон</th> 
        <th>Место работы</th>
        <th>Баланс</th>
      </template>
      <template slot="table-td" slot-scope="{ user }">
        <td>
          <router-link :to="'/users/' + user.id">#{{ user.id }}</router-link>
        </td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.company }}</td>
        <td>{{ user.balance }}</td>
      </template>
    </user-list>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'users',
  components: {
    'user-list': () => import('@/components/UserList.vue')
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
        .get('/users')
        .then(({ data }) => (this.users = data))
        .catch(error => console.log(error))
    }
  }
}
</script>
