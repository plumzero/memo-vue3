<template>
  <h3>函数限流</h3>
  <ul>
    <li>
      <router-link to="/limit/throttle">setTimeout实现</router-link>
    </li>
    <li>
      <router-link to="/limit/debounce">debounce实现</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
