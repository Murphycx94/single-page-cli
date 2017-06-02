/*
* @Author: cx
* @Date:   2017-06-01 17:57:06
* @Last Modified by:   cx
* @Last Modified time: 2017-06-02 16:46:36
*/

'use strict';

import cookie from 'js-cookie'
import { USER } from '@/store/type'

const state = {
	user: false,
}

const getters = {}

const actions = {
	[USER.LOGIN] ({ commit }, params) {
		commit(USER.LOGIN, true)
	},
	[USER.LOGOUT] ({ commit }, params) {
		commit(USER.LOGOUT, false)
	},
}

const mutations = {
	[USER.LOGIN] (state, params) {
		state.user = params
		cookie.set('user', true)
	},
	[USER.LOGOUT] (state, params) {
		state.user = params
		cookie.remove('user')
	}
}
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}