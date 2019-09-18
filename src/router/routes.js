// 引入对应的四个底部路由组件
// 首页
import Home from '../pages/Home/Home.vue'
// 分类
import CateList from '../pages/CateList/CateList.vue'
// 识物
import RecomThings from '../pages/RecomThings/RecomThings.vue'
// 购物车
import ShopCart from '../pages/ShopCart/ShopCart.vue'
// 个人
import Profile from '../pages/Profile/Profile.vue'
// 配置路由
export default[
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cateList',
    component:CateList
  },
  {
    path:'/recomThings',
    component:RecomThings
  },
  {
    path:'/shopCart',
    component:ShopCart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/',
    redirect:'/home'
  }
]