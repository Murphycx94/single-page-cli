/*
* @Author: cx
* @Date:   2017-06-02 10:23:09
* @Last Modified by:   cx
* @Last Modified time: 2017-06-02 17:51:48
*/

'use strict';

import Vue     from 'vue'
import Vuex    from 'vuex'
import cookie  from 'js-cookie'

import userModule from '@/store/modules/user'

Vue.use(Vuex)

const mutations = {}
const actions ={}
export const store = new Vuex.Store({
	strict: true,
	actions,
	mutations,
})

store.registerModule('user', userModule)

const module = {}
export const registerModule = (path, module) => {
	const name = typeof path == 'string' ? path : path.join('/')
	if (!module[name]) {
		store.registerModule(path, module);
		module[name] = true;
	}
}

export const getAuthorization = async () => {
	const user = cookie.get('user')
	if (user == undefined) {
		await store.dispatch('user/USER_LOGOUT')
		return false
	}	else {
		await store.dispatch('user/USER_LOGIN')
		return true
	}
}