
<template>
  <h3>禁止默认事件</h3>
  <a @click.prevent="clickHandle" href="http://www.baidu.com">阻止默认事件</a>
  <div @click="clickDiv">
    <p @click.stop="clickP">测试冒泡</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    clickHandle() {
      // e.preventDefault() // 利用 click.prevent 实现相同效果
      console.log("点击了")
    },
    clickDiv() {
      console.log("点击了div")
    },
    clickP() {
      // e.stopPropagation()  // 利用 click.stop 实现相同效果
      console.log("点击了p");
    }
  }
}
</script>