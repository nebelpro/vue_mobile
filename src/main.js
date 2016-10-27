/*webpack入口文件*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import App_forum from './App_forum.vue'
import forum from './components/forum/content.vue'
import home from './components/home.vue'
import noteList from './components/noteList.vue'
import editNote from './components/editNote.vue'
import addNote from './components/addNote.vue'
import categoryList from './components/categoryList.vue'

Vue.use(VueRouter);

var router = new VueRouter();
//定义路由规则
router.map ({
	/* 论坛部分地址 */
	'/forum': {
		component: App_forum
	},
	/* 笔记部分标签 */
	'/home': {
		component: home
	},
	'/noteList': {
		component: noteList
	},
	'/editNote': {
		component: editNote
	},
	'/addNote': {
		component: addNote
	},
	'/categoryList': {
		component: categoryList
	}
})
//为路由定义全局重定向规则，将任意未匹配路径重定向到/home页面
router.redirect({
	'*': '/forum'
})
//挂载根组件
router.start(App_forum, '#app')
