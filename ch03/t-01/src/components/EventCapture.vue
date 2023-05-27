
<template>
  <h3>事件捕获</h3>
	<div id="Application">
		<div @click.capture="click1">
			外层
			<div @click.capture="click2">
				中层
				<div @click.capture="click3">
					内层
					<button @click="click">点击</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    click1() {
      console.log('外层')
    },
    click2() {
      console.log('中层')
    },
    click3() {
      console.log('内层')
    }
  }
}
</script>
