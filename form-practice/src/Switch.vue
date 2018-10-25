<template>
	<div class="container">
		<div 
		id="on"
		@click="switched(true)"
		:class="{active: value}">On</div>
		<div 
		id="off"
		@click="switched(false)"
		:class="{active: !value}">Off</div>
	</div>
</template>

<script>
	export default {
		props: ['value'],
		methods: {
			switched(isOn) {
				this.$emit('input', isOn)
			}
		}
	}
</script>

<style scoped>
	.container {
		height: 50px;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		display: flex;
		align-items: center;
	}
	.container div {
		width: 100%;
		text-align: center;
	}
	.active {
		background: lightblue;
	}	
</style>