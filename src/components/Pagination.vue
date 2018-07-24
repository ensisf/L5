<template>
  <nav>
    <ul class="pagination">
      <li 
        class="page-item"
        :class="currentPage == 1 ? 'disabled' : ''"
         @click.prevent="move(currentPage - 1)"
      >
        <a class="page-link" href="#">Назад</a>
      </li>
      <li 
        class="page-item"
        v-for="(page, idx) in maxPages"
        :key="idx"
        :class="page === currentPage ? 'active' : ''"
        @click.prevent="move(page)"
      >
        <a class="page-link" href="#">{{ page }}</a>
      </li>      
      <li 
        class="page-item"
        :class="currentPage == maxPages ? 'disabled' : ''"
      >
        <a 
          class="page-link" 
          href="#"
          @click.prevent="move(currentPage + 1)"
        >Далее</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'pagination',
  model: {
    prop: 'currentPage'
  },
  props: {
    maxPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    move(page) {
      this.$emit('input', page)
    }
  }
}
</script>
<style>
.disabled {
  pointer-events: none;
}
</style>
