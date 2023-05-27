<script>
export default {
  data() {
    return {
      msg: '警告框提示',
      count: 0
    }
  },
  methods: {
    click() {
      alert(this.msg + this.count++)
    }
  },
  template: `<div><button @click="click">按钮</button></div>`
}
</script>