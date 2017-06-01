/*
* @Author: cx
* @Date:   2017-05-31 11:41:40
* @Last Modified by:   cx
* @Last Modified time: 2017-06-01 16:51:55
*/

'use strict';

// 相关依赖
import Vue						from 'vue'
import VueRouter			from 'vue-router'
import NProgress			from 'nprogress'
import 'nprogress/nprogress.css'

// 路由模块
import userRoute			from '@/router/user'
import overviewRoute	from '@/router/overview'
import menu1Route			from '@/router/menu1'
import menu2Route			from '@/router/menu2'
import menu3Route			from '@/router/menu3'
import menu4Route			from '@/router/menu4'

Vue.use(VueRouter)

const routes = [].concat(
	userRoute,
	overviewRoute,
	menu1Route,
	menu2Route,
	menu3Route,
	menu4Route,
)

const router = new VueRouter({
	base: 'singlePage',
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

router.beforeEach(async (to, from, next) => {
	NProgress.remove();
	NProgress.start();
	let params;
	NProgress.done();
	next(params);
})

export default router
