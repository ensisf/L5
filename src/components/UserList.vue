<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Еmail</th>
          <th>Телефон</th>
          <th>Место работы</th>
          <th>Баланс</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <router-link :to="'/users/' + user.id">#{{ user.id }}</router-link>
          </td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.balance }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'user-list',
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
td,
tr {
  text-align: center;
}
</style>
