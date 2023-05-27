
<template>
  <h3>键盘事件</h3>
  <div>
    只监听 enter 按键<input @keyup.enter="keyupEnter">
  </div>
  <div>
    监听 alt + enter 组合按键<input @keyup.ctrl.enter="keyupCtrlEnter">
  </div>
</template>

<script>
export default {
  methods: {
    keyupEnter(event) {
      if (event.key == 'Enter') {
        console.log('Enter 被点击')
      } else {
        console.log('因为只监听 Enter，所以这里并不会被执行到')
      }
    },
    keyupCtrlEnter() {
      console.log('Ctrl + Enter 被点击');
    }
  }
}
</script>