
<template>
  <h3>timeout限流</h3>
  <button @click="btn">点击</button>
  <p>当前时间: {{date}}</p>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      isThrottle: false
    }  
  },
  methods: {
    btn() {
      if (this.isThrottle) {
        return ;
      }
      this.date = new Date
      this.isThrottle = true

      setTimeout(() => {
        this.isThrottle = false
      }, 2000)
    }
  }
}
</script>