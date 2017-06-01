/*
* @Author: cx
* @Date:   2017-05-31 16:15:45
* @Last Modified by:   cx
* @Last Modified time: 2017-06-01 16:51:00
*/

'use strict';

export default [
	{
		path: '/menu3',
		name: 'menu3',
		meta: { requiresAuth: true },
		component: resolve => import('@/views/menu3/index.vue'),
	}
]