
<template>
  <h3>模板语法: 属性绑定对象</h3>
  <p v-bind="objectAttrs">一次绑定多个属性</p>
</template>

<script>
export default {
  data() {
    return {
      objectAttrs: {
        id: "appid",
        class: "appclass"
      }
    }
  }
}
</script>