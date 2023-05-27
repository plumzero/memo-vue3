
<template>
  <h3>鼠标事件</h3>
  <div @mousedown.ctrl="mousedownCtrl">按键中只要包含 Ctrl 按键，那么在鼠标按下时就会触发(比如会响应 Ctrl + Shift + 鼠标按下)</div>
  <div @mousedown.ctrl.exact="mousedownCtrlExact">按键中只能有 Ctrl 按键，那么在鼠标按下时会触发(比如不再响应 Ctrl + Shift + 鼠标按下)</div>
</template>

<script>
export default {
  methods: {
    mousedownCtrl() {
      console.log('包含 Ctrl + 鼠标按下')
    },
    mousedownCtrlExact() {
      console.log('只按住 Ctrl + 鼠标按下')
    }
  }
}
</script>