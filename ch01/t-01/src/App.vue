<template>
  <h3>模板基础</h3>
  <ul>
    <li>
      <router-link to="/bind/text">文本插值</router-link>
    </li>
    <li>
      <router-link to="/bind/text/once">文本插值once</router-link>
    </li>
    <li>
      <router-link to="/bind/text/html">文本插值html</router-link>
    </li>
    <li>
      <router-link to="/bind/attr">属性绑定</router-link>
    </li>
    <li>
      <router-link to="/bind/attr/disabled">属性绑定disabled</router-link>
    </li>
    <li>
      <router-link to="/bind/attr/object">属性绑定对象</router-link>
    </li>
    <li>
      <router-link to="/bind/selector">绑定选择器</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {
  }
}
</script>