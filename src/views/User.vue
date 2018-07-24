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
    },
    url() {
      return `/users/${this.id}`
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      axios
        .get(this.url)
        .then(({ data }) => (this.user = data))
        .catch(error => console.log(error))
    },
    saveUser() {
      axios
        .put(this.url, this.user)
        .then(() => {
          this.returnToList()
        })
        .catch(error => console.log(error))
    },
    deleteUser() {
      axios
        .delete(this.url)
        .then(() => this.returnToList())
        .catch(error => console.log(error))
    },
    returnToList() {
      this.$router.push('/users')
    }
  }
}
</script>
