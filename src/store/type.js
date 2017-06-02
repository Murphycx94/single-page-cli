/*
* @Author: cx
* @Date:   2017-06-02 11:03:48
* @Last Modified by:   cx
* @Last Modified time: 2017-06-02 14:17:44
*/

'use strict';

const concatName = (headerName, ...args) => {
	let data = {}
	for (let value of args) {
		data[value] = `${headerName}_${value}`
	}
	return data
}

export const USER = concatName(
	'USER', 'LOGIN', 'LOGOUT'
)