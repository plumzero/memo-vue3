<template>
  <h3>事件传参</h3>
  <button @click="btn1">传参测试一</button>
  <br>
  <button @click="btn2('world')">传参测试二</button>
  <br>
  <p @click="btn3(item)" v-for="(item,index) of names" :key="index">{{ item }}</p>
  <br>
  <button @click="btn4('world', $event)">传参测试三</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      names: ["iwen", "ime", "frank"]
    }
  },
  methods: {
    btn1(e) {
      this.count++
      e.target.innerHTML = "点击次数" + this.count
    },
    btn2(msg) {
      console.log("hello", msg)
    },
    btn3(name) {
      console.log('Hi', name);
    },
    btn4(msg, e) {
      console.log("hello", msg)
      console.log(e)
    }
  }
}
</script>