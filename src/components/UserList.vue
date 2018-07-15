<template>
  <div>
    <slot name="eeeee"></slot>
    <rows-per-page 
      class="row mb-2" 
      v-if="users.length"
      :variants="variantsList"
      v-model.number="perPage"
    ></rows-per-page>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <slot name="table-head">
            <th>ID</th>
            <th>Имя</th>
            <th>Фамилия</th>
          </slot>          
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in rowsToShow" :key="user.id">
          <slot name="table-body" :user="user">
            <td>
              <router-link :to="'/users/' + user.id">#{{ user.id }}</router-link>
            </td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
          </slot> 
        </tr>
      </tbody>
    </table>
    <pagination 
      v-if="users.length"
      v-model="currentPage"
      :maxPages="maxPages"
    ></pagination>
  </div>
</template>

<script>
export default {
  name: 'user-list',
  components: {
    'rows-per-page': () => import('@/components/RowsPerPageSelect.vue'),
    pagination: () => import('@/components/Pagination.vue')
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    perPage: 5,
    currentPage: 1,
    variantsList: [5, 30]
  }),
  computed: {
    maxPages() {
      return Math.ceil(this.users.length / this.perPage)
    },
    rowsToShow() {
      const idxStart = (this.currentPage - 1) * this.perPage
      return this.users.slice(idxStart, idxStart + this.perPage)
    }
  },
  watch: {
    maxPages() {
      if (this.currentPage > this.maxPages) {
        this.currentPage = this.maxPages
      }
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
