
<template>
  <h3>模板语法: 绑定选择器</h3>
  <button @click="btn">变化</button>
  <p v-bind:[prop]="colorName">hello world</p>
</template>

<script>
export default {
  data() {
    return {
      prop: 'id',
      colorName: 'clr'
    }
  },
  methods: {
    btn() {
      if (this.prop == 'id') {
        this.prop = 'class'
      } else {
        this.prop = 'id'
      }
    }
  }
}
</script>

<style>
  #clr {
    color: red;
  }
  .clr {
    color: blue;
  }
</style>