
<template>
  <h3>多行文本框</h3>
  <textarea v-model="textareaField"></textarea>
  <p>多行文本框内容:{{textareaField}}</p>
</template>

<script>
export default {
  data() {
    return {
      textareaField: ''
    }
  }
}
</script>