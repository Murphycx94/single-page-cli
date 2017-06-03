<template>
	<div id="topbar">	
		<div class="topbar__logo">
			此处是LOGO
		</div>
		<div class="topbar__right">
			<el-button type="danger" @click="logout">退出登录</el-button>
		</div>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		data () {
			return {

			}
		},
		methods: {
			...mapActions('user', {
				userLogout: 'USER_LOGOUT'
			}),
			logout () {
				this.userLogout().then(res => {
					this.$router.push({ name: 'login' })
				}).catch(err => {

				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../assets/style/data.less';
	#topbar {
		display: flex;
		justify-content: space-between;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 50px;
		background-color: darken(@baseDark, 5%);
		.topbar__logo {
			width: 150px;
			height: 50px;
			border-right: 1px solid #fff;
			text-align: center;
			line-height: 50px;
			color: #FFF;
		}
		.topbar__right {
			margin-top: 7px;
		}
	}
</style>
