
<template>
  <h3>模板语法: 变量插值once</h3>
  <button @click="count++">点击加一</button>
  <p v-once>显示计数一次: {{count}}</p>
  <p>显示计数不限: {{count}}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 10
    }
  }
}
</script>