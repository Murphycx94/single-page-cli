<template>
	<div id="app">		
		<transition v-if="user" name="el-fade-in-linear" mode="out-in">
			<div>
				<Topbar></Topbar>
				<Sidebar></Sidebar>
				<div id="router-view">
					<router-view></router-view>
				</div>
			</div>
		</transition>
		<transition v-else name="el-fade-in-linear" mode="out-in">
			<router-view name="user"></router-view>
		</transition>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'
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
		},
		computed: {
			...mapState('user', ['user']),
		},
		methods: {
			
		},
		mounted () {
			
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
