<template>
	<div id="sidebar">
		<el-menu
		 default-active="menu1"
		 @select="onSelect"
		 theme="dark">
		 <el-menu-item index="index">首页</el-menu-item>
			<el-menu-item index="menu1">菜单1</el-menu-item>
			<el-menu-item index="menu2">菜单2</el-menu-item>
			<el-submenu index="1">
				<template slot="title">菜单</template>
				<el-menu-item index="menu3">菜单3</el-menu-item>
				<el-menu-item index="menu4">菜单4</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {
		onSelect (name) {
			this.$router.push({ name })
		}
	}
}
</script>

<style lang="less" scoped>
	@import '../assets/style/data.less';
	#sidebar {
		position: fixed;
		left: 0;
		top: 50px;
		bottom: 0;
		width: 150px;
		background: @baseDark;
	}
</style>
