<template>
	<div id="topbar">	
		<div class="topbar__logo">
			此处是LOGO
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	}
}
</script>

<style lang="less" scoped>
	@import '../assets/style/data.less';
	#topbar {
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
	}
</style>
