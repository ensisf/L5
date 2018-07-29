<template>
  <div>
    <div class="row">
      <div class="col col-md-6">
        <div class="form-group">
          <label for="firstName">Имя</label>
          <input type="text" class="form-control" id="firstName" v-model="profileUserName">
        </div>
        <div class="form-group">
          <label for="lastName">Фамилия</label>
          <input type="text" class="form-control" id="lastName" v-model="profileUserlastName">
        </div>
        <div class="form-group">
          <label for="email">Еmail</label>
          <input type="email" class="form-control" id="email" v-model="profileUserEmail">
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-success" @click="save">Сохранить</button>
        </div>
      </div>
      <div class="col col-md-6">
        <p>Store</p>
        <pre>
          {{ $store.state.userProfile }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-card',
  computed: {
    profileUserName: {
      get() {
        return this.$store.state.userProfile.name
      },
      set(value) {
        this.$store.commit('changeUserName', value)
      }
    },
    profileUserlastName: {
      get() {
        return this.$store.state.userProfile.lastname
      },
      set(value) {
        this.$store.commit('changeUserLastname', value)
      }
    },
    profileUserEmail: {
      get() {
        return this.$store.state.userProfile.email
      },
      set(value) {
        this.$store.commit('changeUserEmail', value)
      }
    }
  },
  methods: {
    save() {
      this.$router.push('users')
    }
  }
}
</script>
