
<template>
  <h3>列表渲染 任务列表应用</h3>
  <form @submit.prevent="addTask">
    <span>新建任务</span>
    <input v-model="taskText" placeholder="请输入任务...">
    <button>添加</button>
  </form>
  <ol>
    <li v-for="(item,index) in todos" :key="index">
      {{item}}
      <button @click="remove(index)">删除任务</button>
    </li>
  </ol>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      taskText: ''
    }
  },
  methods: {
    addTask() {
      if (this.taskText.length == 0) {
        alert('请输入任务')
        return
      }
      this.todos.push(this.taskText)
      this.taskText = ''
    },
    remove(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>