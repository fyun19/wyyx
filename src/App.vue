<template>
    <div>
      <router-view></router-view>
      <FooterGuide/>
    </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import Home from './pages/Home/Home.vue'
export default {
  // 注册组件
  components:{
    FooterGuide,
    Home
  }
};
</script>

// <style lang='stylus' rel='stylesheet/stylus'>
// body,html
//   height 100%
//   overflow hidden
// </style>
