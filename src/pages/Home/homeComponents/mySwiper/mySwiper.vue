<template>
  <div class="page">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d0ed5c1095da85ec80a776a23b2023f3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/7c324fa2ebc05c912946f897eb1e4cc9.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/2565b1fa18e4b8b64aad0710c9725aa1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/96055517125bb2233636dee9fc1ca183.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/1eba77c8f34e1498b83cabca593f3a3f.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/254a86a3cf479907522dc62feccb9607.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
// 引入swiper包
import Swiper from "swiper";
import "swiper/css/swiper.css";

  export default {
   mounted(){
    
       new Swiper ('.swiper-container', {
       direction: 'horizontal', // 垂直切换选项
       loop: true, // 循环模式选项
       autoplay:true,// 自动轮播
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination'
    },
    bulletClass : 'my-bullet',//需设置.my-bullet样式
  })
     
            
   }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../../common/stylus/mixins.styl";
  .page
    .swiper-container
      width 750px
      height 400px
      img
        width 100%
        height 100% 
</style>

<style >
  .swiper-pagination-bullet{
    width: 36px;
    height: 10px;
    background-color: blue;
    border-radius: 0
  }
</style>

 



