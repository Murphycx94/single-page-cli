/*
* @Author: cx
* @Date:   2017-05-31 16:15:45
* @Last Modified by:   cx
* @Last Modified time: 2017-06-01 16:50:51
*/

'use strict';

export default [
	{
		path: '/menu2',
		name: 'menu2',
		meta: { requiresAuth: true },
		component: resolve => import('@/views/menu2/index.vue'),
	}
]