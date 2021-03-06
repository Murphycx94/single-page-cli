import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from '@/App'
import { store } from '@/store'
import router from '@/router'

import '@/assets/style/common.less'

Vue.config.productionTip = false

Vue.use(ElementUI)


new Vue({
	router,
	store,
	el: '#app',
	template: '<App/>',
	components: { App },
})
