import 'lib-flexible/flexible'
// 引入Vue
import Vue from 'vue'
import App from './App'
// 引入路由文件
import router from './router/index'
// 引入store
// import store from './store'

// 引入Header组件
import Header from './components/Header/Header.vue'

// 注册全局组件
Vue.component('Header',Header)



new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router,
  // store 
  

})