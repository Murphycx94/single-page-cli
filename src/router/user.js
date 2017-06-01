/*
* @Author: cx
* @Date:   2017-05-31 11:49:23
* @Last Modified by:   cx
* @Last Modified time: 2017-05-31 16:16:23
*/

'use strict';

export default [
	{
		path: '/user',
		name: 'user',
		meta: { requiresAuth: true },
		redirect: { name: 'login' },
		components: {
			user: resolve => import('@/views/user/index.vue')
		},
		children: [
			{
				path: 'login',
				name: 'login',
				component: resolve => import('@/views/user/login/login.vue')
			},
			{
				path: 'register',
				name: 'register',
				component: resolve => import('@/views/user/register/register.vue')
			},
		]
	}
]