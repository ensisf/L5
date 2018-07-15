<template>
  <div>
    <user-form v-model="user"></user-form>
    <button 
      class="btn btn-success" 
      type="button"
      @click="saveUser"
    >Сохранить</button>
  </div>
</template>

<script>
import axios from '@/axios.js'

const userDefaults = {
  id: 0,
  isActive: false,
  balance: '',
  picture: 'http://placehold.it/128x128',
  age: 0,
  accessLevel: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'add',
  components: {
    'user-form': () => import('@/components/UserForm.vue')
  },
  data: () => ({
    user: null
  }),
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.user = Object.assign({}, userDefaults)
    },
    saveUser() {
      axios
        .post(`/users`, this.user)
        .then(res => this.$router.push({ path: `/users/${res.data.id}` }))
        .catch(error => console.log(error))
    }
  }
}
</script>
