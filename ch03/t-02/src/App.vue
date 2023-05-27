<template>
  <h3>事件类型</h3>
  <ul>
    <li>
      <router-link to="/event/type">事件类型</router-link>
    </li>
    <li>
      <router-link to="/event/keyup">键盘事件</router-link>
    </li>
    <li>
      <router-link to="/event/mousedown">鼠标事件</router-link>
    </li>
    <li>
      <router-link to="/event/click">单击事件</router-link>
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

