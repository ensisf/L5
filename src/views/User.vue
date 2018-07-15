<template>
  <div>
    <user-form 
      class="mb-3"
      v-if="user"
      v-model="user"
    ></user-form>
    <button 
      type="button" 
      class="btn btn-success mr-4"
      @click="saveUser"
    >Сохранить</button>
    <button 
      type="button" 
      class="btn btn-warning mr-4"
      @click="returnToList"
    >Отмена</button>
    <button 
      type="button" 
      class="btn btn-danger"
      @click="deleteUser"
    >Удалить</button>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'user',
  components: {
    'user-form': () => import('@/components/UserForm.vue')
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get(`/users/${this.id}`)
        .then(({ data }) => (this.user = data))
        .catch(error => console.log(error))
    },
    saveUser() {
      axios.put(`/users/${this.id}`, this.user).catch(error => console.log(error))
    },
    deleteUser() {
      axios
        .delete(`/users/${this.id}`)
        .then(() => this.returnToList())
        .catch(error => console.log(error))
    },
    returnToList() {
      this.$router.push({ path: '/users' })
    }
  }
}
</script>
