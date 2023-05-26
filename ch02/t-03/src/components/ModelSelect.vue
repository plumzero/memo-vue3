
<template>
  <h3>单选列表</h3>
  <select v-model="select">
    <option value="male">男</option>
    <option value="female">女</option>
  </select>
  <p>选择列表: {{select}}</p>
</template>

<script>
export default {
  data() {
    return {
      select: ''
    }
  }
}
</script>