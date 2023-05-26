
<template>
  <h3>通过 computed 属性创建 get/set 方法</h3>
  <input v-model="inputText" placeholder="请输入'大'或'小'">
  <p>{{inputText}}: {{count}}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    inputText: {
      get() {
        return this.count >= 10 ? '大' : '小'
      },
      set(newValue) {
        if (newValue == '大') {
          this.count = 10
        } else if (newValue == '小') {
          this.count = -11
        }
      }
    }
  }
}
</script>