
<template>
  <h3>事件类型</h3>
  <div>
    <div @click="click">单击事件</div>
    <div @dblclick="dblclick">双击事件</div>
    <input @focus="focus" @blur="blur" @change="change" @select="select">
    <div @mousedown="mousedown">鼠标按下</div>
    <div @mouseup="mouseup">鼠标抬起</div>
    <div @mousemove="mousemove">鼠标移动</div>
    <div @mouseout="mouseout" @mouseover="mouseover">鼠标移入移出</div>
    <input @keydown="keydown" @keyup="keyup">
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      console.log('单击事件')
    },
    dblclick() {
      console.log('双击事件')
    },
    focus() {
      console.log('获取焦点')
    },
    blur() {
      console.log('失去焦点')
    },
    change() {
      console.log('内容改变')
    },
    select() {
      console.log('文本选中')
    },
    mousedown() {
      console.log('鼠标按键按下')
    },
    mouseup() {
      console.log('鼠标按键抬起')
    },
    mousemove() {
      console.log('鼠标移动')
    },
    mouseout() {
      console.log('鼠标移出')
    },
    mouseover() {
      console.log('鼠标移入')
    },
    keydown() {
      console.log('键盘按键按下')
    },
    keyup() {
      console.log('键盘按键抬起')
    }
  }
}
</script>