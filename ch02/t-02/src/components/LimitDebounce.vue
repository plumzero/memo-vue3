
<template>
  <h3>debounce限流</h3>
  <button @click="btn">点击</button>
  <p>当前时间: {{date}}</p>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      date: ''
    }  
  },
  methods: {
    btn() {
      _.debounce(function() {
        this.date = new Date
      }, 2000)
    }
  }
}
</script>