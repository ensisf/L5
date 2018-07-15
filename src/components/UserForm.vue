<template>
  <div>
    <div class="row">
      <div class="col col-sm-6 form-group">
        <label for="firstName">Имя</label>
        <input type="text" class="form-control" id="firstName" v-model="localUser.firstName">
      </div>
      <div class="col col-sm-6 form-group">
        <label for="lastName">Фамилия</label>
        <input type="text" class="form-control" id="lastName" v-model="localUser.lastName">
      </div>
      <div class="col col-sm-6 form-group">
        <label for="email">Еmail</label>
        <input type="email" class="form-control" id="email" v-model="localUser.email">
      </div>
      <div class="col col-sm-6 form-group">
        <label for="phone">Телефон</label>
        <input type="tel" class="form-control" id="phone" v-model="localUser.phone">
      </div>
      <div class="col col-sm-6 form-group">
        <label for="address">Адресс</label>
        <input type="text" class="form-control" id="address" v-model="localUser.address">
      </div>
      <div class="col col-sm-6 form-group">
        <label>Зарегистрирован</label>
        <datepicker v-model="localUser.registered"></datepicker>
      </div>
      <div class="col col-sm-6 form-group">
        <label for="age">Возраст</label>
        <input type="number" class="form-control" id="age" v-model="localUser.age">
      </div>
      <div class="col col-sm-6 form-group">
        <label for="company">Место работы</label>
        <input type="text" class="form-control" id="company" v-model="localUser.company">
      </div>
      <div class="col col-sm-6 form-group">
        <label for="balance">Баланс</label>
        <input type="text" class="form-control" id="balance" v-model="localUser.balance">
      </div>
      <div class="col col-sm-6 custom-control custom-checkbox form-group">
        <input type="checkbox" class="custom-control-input" id="isActive" v-model="localUser.isActive">
        <label class="ml-3 mt-4 custom-control-label" for="isActive">Активный</label>
      </div>
      <div class="col col-sm-6 form-group">
        <label for="accessLevel">Уровень доступа</label>
        <select id="accessLevel" class="form-control" v-model="localUser.accessLevel">
          <option v-for="type in accessTypes" :key="type">{{ type }}</option>
        </select>
      </div>
      <div class="col col-sm-6 form-group">
        <upload v-model="localUser.picture"></upload>
      </div>
      <div class="col col-sm-12 form-group">
        <label>Дополнительная информация</label>
        <editor v-model="localUser.about"></editor>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-form',
  components: {
    upload: () => import('@/components/Upload.vue'),
    editor: () => import('@/components/Editor.vue'),
    datepicker: () => import('@/components/Datepicker.vue')
  },
  model: {
    prop: 'user',
    event: 'updateUser'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: null,
    accessTypes: ['quest', 'user', 'admin']
  }),
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit('updateUser', this.localUser)
      }
    }
  },
  created() {
    this.copyUser()
  },
  methods: {
    copyUser() {
      this.localUser = Object.assign({}, this.user)
    }
  }
}
</script>
