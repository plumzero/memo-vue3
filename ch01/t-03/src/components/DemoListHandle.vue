
<template>
  <h3>列表渲染 前处理</h3>
  <ul>
    <li v-for="(item,index) in handle(list)" :key="index">
      <div>{{index + '.' + item.name}}</div>
      <div>{{item.num}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: 'Lily',
          num: '151xxxxxxxx'
        },
        {
          name: 'Lucy',
          num: '151xxxxxxxx'
        },
        {
          name: 'Jim',
          num: '151xxxxxxxx'
        }
      ]
    }
  },
  methods: {
    handle(l) {
      return l.filter(item => item.name != 'Jim')
    }
  }
}
</script>