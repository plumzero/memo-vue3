
<template>
  <h3>模板语法: 变量插值html</h3>
  <p v-html="rawHtml"></p>
</template>

<script>
export default {
  data() {
    return {
      rawHtml: "<a href=''>导航到某处</a>"
    }
  }
}
</script>