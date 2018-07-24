<template>
  <div>
    <div class="col col-sm-4 form-group">
      <select 
        class="form-control" 
        :value="perPage"
        @change="changeRowsCount"
        >
        <option 
          v-for="variant in variants" 
          :key="variant"
          :value="variant"
        >{{ variant }}</option>
      </select>
      <small class="form-text text-muted">Выбрано элементов настраницу — {{ perPage }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rows-per-page',
  model: {
    prop: 'perPage'
  },
  props: {
    perPage: {
      type: Number,
      required: true
    },
    variants: {
      type: Array,
      default: () => [5, 20, 40]
    }
  },
  methods: {
    changeRowsCount({ target }) {
      this.$emit('input', target.value)
    }
  }
}
</script>
