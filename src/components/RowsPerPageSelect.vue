<template>
  <div>
    <div class="col col-sm-4 form-group">
      <select class="form-control" v-model="selected">
        <option v-for="variant in variants" :key="variant">{{ variant }}</option>
      </select>
      <small class="form-text text-muted">Выбрано элементов настраницу — {{ selected }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rows-per-page-select',
  data: () => ({
    variants: [5, 10, 15, 20],
    selected: 5
  })
}
</script>
