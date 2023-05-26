
<template>
  <h3>模板语法: 属性绑定disabled</h3>
  <button :disabled="isButtonDisabled">按钮</button>
</template>

<script>
export default {
  data() {
    return {
      isButtonDisabled: true
    }
  }
}
</script>