<template>
  <h3>多选列表</h3>
  <select v-model="selectList" multiple>
    <option value="football">足球</option>
    <option value="basketball">篮球</option>
    <option value="volleyball">排球</option>
  </select>
  <p>选择列表: {{selectList}}</p>
</template>

<script>
export default {
  data() {
    return {
      selectList: []
    }
  }
}
</script>