
<template>
  <h3>侦测数组变化</h3>
  <button @click="addElement">添加数据</button>
  <ul>
    <li v-for="(item,index) of names" :key="index">{{item}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      names: ["iwen", "ime", "frank"]
    }
  },
  methods: {
    addElement() {
      this.names.push("sakura")
      // this.names.concat(["sakura"]) // 不会引起 UI 的自动更新
    }
  }
}
</script>