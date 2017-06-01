<template>
	<div id="app">	
		<transition v-if="loginStatus" name="el-fade-in-linear" mode="out-in">
			<router-view name="user"></router-view>
		</transition>	
		<transition v-else name="el-fade-in-linear" mode="out-in">
			<div>
				<Topbar></Topbar>
				<Sidebar></Sidebar>
				<div id="router-view">
					<router-view></router-view>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import Topbar from '@/components/topbar.vue'
	import Sidebar from '@/components/sidebar.vue'
	export default {
		data () {
			return {
				loginStatus: false,
			}
		},
		components: {
			Topbar,
			Sidebar,
		}
	}
</script>

<style lang="less" scoped>
	#router-view {
		position: fixed;
		left: 150px;
		right: 0;
		top: 50px;
		bottom: 0;
		overflow: auto;
	}
</style>
