
<template>
  <h3>模板语法: 变量插值</h3>
  <p>{{noun}}</p>
  <p>{{desp}}</p>
  <p>{{ number + 1 }}</p>
  <p>{{ ok ? 'YES' : 'NO' }}</p>
  <p>{{ message.split('').reverse().join('') }}</p>
</template>

<script>
export default {
  data() {
    return {
      noun: "语法测试",
      desp: "也叫文本插值",
      number: 10,
      ok: true,
      message: "hello world",
      rawHtml: "<a href='www.baidu.com'>百度一下</a>",
      count: 0
    }
  }
}
</script>