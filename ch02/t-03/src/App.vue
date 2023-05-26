<template>
  <h3>表单数据</h3>
  <ul>
    <li>
      <router-link to="/model/input">文本输入框</router-link>
    </li>
    <li>
      <router-link to="/model/textarea">多行文本框</router-link>
    </li>
    <li>
      <router-link to="/model/input/checkbox">复选框</router-link>
    </li>
    <li>
      <router-link to="/model/input/radio">单选框</router-link>
    </li>
    <li>
      <router-link to="/model/select">单选列表</router-link>
    </li>
    <li>
      <router-link to="/model/multiple">多选列表</router-link>
    </li>
    <li>
      <router-link to="/register/page">帐号注册页面</router-link>
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

