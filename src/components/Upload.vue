<template>
  <div ref="dropField" class="dz">
    <label>URL картинки</label>
    <input type="url" class="form-control" :value="imageLink" readonly>
    <br>
    <div class="d-flex align-items-center">
      <img :src="imageLink" alt="thumb" width="50" height="50" class="img-thumbnail mr-2">
      <p>Перетащите файл сюда или кликните, чтобы загрузить.</p>
    </div>
  </div>
</template>

<script>
import Dropzone from 'dropzone'

export default {
  name: 'upload',
  model: {
    prop: 'imageLink'
  },
  props: {
    imageLink: {
      type: String,
      required: true
    }
  },
  data: () => ({
    dz: null
  }),
  mounted() {
    this.dz = new Dropzone(this.zone, {
      url: 'https://api.imgur.com/3/image',
      headers: {
        Authorization: 'Client-ID 958f339f5ad1b4b',
        'Cache-Control': null,
        'X-Requested-With': null
      },
      method: 'post',
      paramName: 'image',
      acceptedFiles: 'image/*',
      maxFiles: 1,
      success: (e, { data }) => {
        this.setNewUserpic(data.link)
      }
    })
  },
  beforeDestroy() {
    this.dz.disable()
  },
  computed: {
    zone() {
      return this.$refs.dropField
    }
  },
  methods: {
    setNewUserpic(img) {
      this.$emit('input', img)
    }
  }
}
</script>
<style>
[readonly] {
  pointer-events: none;
}
.dz * {
  pointer-events: none;
}
</style>
