<template>
  <h3>组件</h3>
  <ul>
    <li>
      <router-link to="/component/alert">组件事例</router-link>
      <my-alert>
        
      </my-alert>
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

