/*
* @Author: cx
* @Date:   2017-05-31 16:15:45
* @Last Modified by:   cx
* @Last Modified time: 2017-06-01 17:12:59
*/

'use strict';

export default [
	{
		path: '/menu4',
		name: 'menu4',
		meta: { requiresAuth: true },
		component: resolve => import('@/views/menu4/index.vue'),
	}
]