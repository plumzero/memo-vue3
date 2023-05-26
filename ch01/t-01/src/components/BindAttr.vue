
<template>
	<h3>模板语法: 属性绑定</h3>
	<button @click="btn">变色</button>
	<button @click="btn2">消除</button>
	<p :class="colorName">这是第{{count}}次点击</p>
</template>

<script>
export default {
	data() {
		return {
			count: 0,
			colorName: 'red'
		}
	},
	methods: {
		btn() {
			this.count += 1
			if (this.count % 2 == 1) {
				this.colorName = "blue"
			} else {
				this.colorName = "red"
			}
		},
		btn2() {
			this.colorName = null
		}
	}
}
</script>

<style>
	.red {
		color: red;
	}
	.blue {
		color: blue;
	}
</style>