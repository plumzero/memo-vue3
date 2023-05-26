
<template>
  <h3>单选框</h3>
  <ul>
    <li><input type="radio" value="male" v-model="sex">男</li>
    <li><input type="radio" value="female" v-model="sex">女</li>
  </ul>
  <p>性别: {{sex}}</p>
</template>

<script>
export default {
  data() {
    return {
      sex: ''
    }
  }
}
</script>