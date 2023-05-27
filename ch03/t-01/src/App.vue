<template>
  <h3>事件的监听与处理</h3>
  <ul>
    <li>
      <router-link to="/event/handle/inline">内联事件处理器</router-link>
    </li>
    <li>
      <router-link to="/event/handle/method">方法事件处理器</router-link>
    </li>
    <li>
      <router-link to="/event/param">事件传参</router-link>
    </li>
    <li>
      <router-link to="/event/bubble">事件冒泡</router-link>
    </li>
    <li>
      <router-link to="/event/capture">事件捕获</router-link>
    </li>
    <li>
      <router-link to="/event/stop">阻止事件传递</router-link>
    </li>
    <li>
      <router-link to="/event/prevent">禁止默认事件</router-link>
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

