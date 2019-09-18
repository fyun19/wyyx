import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入配置好的路由文件
import routes from './routes'

// 声明使用
Vue.use(VueRouter)

//   export default new VueRouter({
//   routes
// })

const router = new VueRouter({
  routes
})
export default router

