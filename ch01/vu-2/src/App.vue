<template>
  <div v-bind:class="dynamicClass" v-bind:id="dynamicId" v-bind:title="dynamicTitle">测试</div>
  <button :disabled="isButtonDisabled">按钮</button>
  <div v-bind="objectAttrs">一次绑定多个属性</div>
</template>

<script>
export default {
  data() {
    return {
      dynamicClass: "active",
      dynamicId: "appid",
      dynamicTitle: null,
      isButtonDisabled: false,
      objectAttrs: {
        id: "appid",
        class: "appclass"
      }
    }
  }
}
</script>

<style>

</style>
