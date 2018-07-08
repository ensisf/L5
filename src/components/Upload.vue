<template>
  <div>
    <label for="picture">URL картинки</label>
    <input type="url" class="form-control" id="picture" v-model="localUserpicLink">
    <br>
    <div class="d-flex align-items-center">
      <img :src="localUserpicLink" alt="thumb" width="50" height="50" class="img-thumbnail">
      <input 
        type="file" 
        ref="userpic"
        hidden
        @change="uploadImage"
      >
      <button 
        type="button" 
        class="btn btn-success ml-2"
        @click="selectImage"
      >Загрузить...</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'upload',
  model: {
    prop: 'userpicLink',
    event: 'uploadImage'
  },
  props: {
    userpicLink: {
      type: String,
      default: 'http://placehold.it/50x50'
    }
  },
  data: () => ({
    localUserpicLink: null
  }),
  watch: {
    localUserpicLink() {
      this.$emit('uploadImage', this.localUserpicLink)
    }
  },
  created() {
    this.copyLink()
  },
  methods: {
    copyLink() {
      this.localUserpicLink = this.userpicLink.substring(0)
    },
    selectImage() {
      this.$refs.userpic.click()
    },
    uploadImage() {
      const URL = 'https://api.imgur.com/3/image'
      const config = {
        headers: {
          Authorization: `Client-ID 958f339f5ad1b4b`
        }
      }
      const input = this.$refs.userpic
      const formdata = new FormData()

      formdata.append('image', input.files[0])

      axios
        .post(URL, formdata, config)
        .then(res => res.data)
        .then(res => {
          if (res.status === 200) {
            this.localUserpicLink = res.data.link
          }
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
