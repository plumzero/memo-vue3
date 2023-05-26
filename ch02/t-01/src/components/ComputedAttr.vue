
<template>
  <h3>计算属性computed</h3>
  <button @click="btn">点击</button>
  <p>{{count}}是{{type}}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    btn() {
      this.count++
    }
  },
  computed: {
    type() {
      return this.count % 2 == 1 ? '奇数' : '偶数'
    }
  }
}
</script>