<template>
	<div class="user-box">
		<h1>登录页面</h1>
		<h2>（模拟账号框-----------------------）</h2>
		<h2>（模拟密码框-----------------------）</h2>
		<div class="btn">
			<el-button type="primary">登 录</el-button>
		</div>
		<div class="jump">
			<router-link :to="{ name: 'register' }">注册</router-link>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.user-box {
		color: #fff;
		background: rgba(52,54,71,.8);
		width: 480px;
		padding: 20px;
		border-radius: 8px;
		margin: 0 auto;
		h1, h2, h3 {
			margin: 20px 0;
			text-align: center;
		}
		.btn {
			display: flex;
			justify-content: center;
		}
		.jump {
			margin: 20px 0 0; 
			display: flex;
			justify-content: center;
		}
	}
</style>