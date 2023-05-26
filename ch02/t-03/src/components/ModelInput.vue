
<template>
  <h3>文本输入框</h3>
  <input v-model="textField"/>
  <p>文本框内容: {{textField}}</p>
</template>

<script>
export default {
  data() {
    return {
      textField: ''
    }
  }
}
</script>