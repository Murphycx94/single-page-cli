/*
* @Author: cx
* @Date:   2017-05-31 16:15:45
* @Last Modified by:   cx
* @Last Modified time: 2017-06-03 14:13:56
*/

'use strict';

export default [
	{
		path: '/menu1',
		name: 'menu1',
		meta: { requiresAuth: true },
		component: resolve => import('@/views/menu1/index.vue'),
	}
]