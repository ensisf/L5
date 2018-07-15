<template>
  <div class="d-flex align-items-center">
    <input 
      type="text" 
      class="form-control" 
      ref="datepicker"
      :value="value">
    <button type="button" class="btn btn-primary ml-2" @click="openCalendar">Выбрать дату</button>
  </div>
</template>

<script>
import pickmeup from 'pickmeup'
import 'pickmeup/css/pickmeup.css'

export default {
  name: 'datepicker',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  watch: {
    value: 'updateDatepicker'
  },
  mounted() {
    pickmeup(this.input, {
      format: 'd.m.Y',
      default_date: false,
      hide_on_select: true
    })
    this.input.addEventListener('pickmeup-change', ({ detail }) =>
      this.$emit('input', detail.formatted_date)
    )
  },
  beforeDestroy() {
    pickmeup(this.input).destroy()
  },
  computed: {
    input() {
      return this.$refs.datepicker
    }
  },
  methods: {
    openCalendar() {
      pickmeup(this.input).show()
    },
    updateDatepicker() {
      console.log(this.input)
      pickmeup(this.input).set_date(this.value)
    }
  }
}
</script>
