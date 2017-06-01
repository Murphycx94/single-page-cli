<template>
	<div class="user">
		<img src="../../assets/logo.png" height="150" width="150">
		<transition name="el-fade-in-linear" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
	}
</script>

<style lang="less" scoped>
	.user {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		min-height: 650px;
		background: linear-gradient(90deg,#00a5f8,#f01562);
		img {
			display: block;
			margin: 50px auto;
		}
		h1 {
			margin-top: 100px;
			text-align: center;
		}
		h2 {
			margin-top: 20px;
			text-align: center;
		}
	}
</style>