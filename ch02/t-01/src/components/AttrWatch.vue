
<template>
  <h3>属性侦听watch</h3>
  <span>请输入:</span>
  <input v-model="inputText"/>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    }
  },
  watch: {
    inputText(oldVal, newVal) {
      if (newVal.length > 3) {
        alert('太长了')
        return
      }
    }
  }
}
</script>