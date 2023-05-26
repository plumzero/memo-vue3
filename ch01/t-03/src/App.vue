<template>
  <IfDemo/>
  <ul>
    <li>
      <router-link to='/demo/if'>条件渲染</router-link>
    </li>
    <li>
      <router-link to='/demo/list'>列表渲染</router-link>
    </li>
    <li>
      <router-link to='/demo/list/handle'>列表渲染 前处理</router-link>
    </li>
    <li>
      <router-link to='/demo/list/change'>列表渲染 侦测数组变化</router-link>
    </li>
    <li>
      <router-link to='/demo/list/todo'>列表渲染 任务列表应用</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  components: {
  }
}
</script>
