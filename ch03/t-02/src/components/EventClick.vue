
<template>
  <h3>单击事件</h3>
  <div @click.left="clickLeft">单击左键</div>
  <div @click.middle="clickMiddle">单击中键</div>
  <div @click.right="clickRight">单击右键</div>
</template>

<script>
export default {
  methods: {
    clickLeft() {
      console.log('单击左键')
    },
    clickMiddle() {
      console.log('单击中键')
    },
    clickRight() {
      console.log('单击右键')
    }
  }
}
</script>