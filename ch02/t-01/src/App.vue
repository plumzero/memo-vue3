<template>
  <h3>组件的属性和方法</h3>
  <ul>
    <li>
      <router-link to="/sub/computed">计算属性computed</router-link>
    </li>
    <li>
      <router-link to="/sub/computed/getset">利用计算属性实现get/set方法</router-link>
    </li>
    <li>
      <router-link to="/sub/watch">属性侦听watch</router-link>
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
