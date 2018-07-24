<template>
  <textarea ref="editor" cols="30" rows="10" class="form-control" :value="value"></textarea>
</template>

<script>
import MediumEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.min.css'
import 'medium-editor/dist/css/themes/flat.css'

export default {
  name: 'editor',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data: () => ({
    editor: null
  }),
  computed: {
    input() {
      return this.$refs.editor
    }
  },
  mounted() {
    this.editor = new MediumEditor(this.input)
    this.editor.subscribe('editableInput', ({ target }) => {
      this.$emit('input', target.innerHTML)
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  }
}
</script>
