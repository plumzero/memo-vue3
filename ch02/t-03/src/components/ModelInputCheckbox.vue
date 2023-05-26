
<template>
  <h3>复选框</h3>
  <ul>
    <li><input type="checkbox" value="football" v-model="checkList"/>足球</li>
    <li><input type="checkbox" value="basketball" v-model="checkList"/>篮球</li>
    <li><input type="checkbox" value="volleyball" v-model="checkList"/>排球</li>
  </ul>
  <p>复选框:{{checkList}}</p>
</template>

<script>
export default {
  data() {
    return {
      checkList: []
    }
  }
}
</script>