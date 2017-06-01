/*
* @Author: cx
* @Date:   2017-06-01 15:08:19
* @Last Modified by:   cx
* @Last Modified time: 2017-06-01 16:14:03
*/

'use strict';

export default [
	{
		path: '/',
		name: 'index',
		meta: { requiresAuth: true },
		component: resolve => import('@/views/index.vue'),
	}
]