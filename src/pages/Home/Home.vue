<template>
   <div class="home-container">
     <!-- 头部组件 -->
    <Header/> 
    <div class="home-main">
      <!-- 轮播图 -->
      <mySwiper/>
      <!-- 两排商品 -->
      <Nav/>
      <!-- 限时购 -->
      <TimeBuy/>
       <SmallItem/>
     
    </div>
   </div> 
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from 'swiper'
import mySwiper from './homeComponents/mySwiper/mySwiper'
import Nav from './homeComponents/Nav/Nav'
import TimeBuy from './homeComponents/TimeBuy/TimeBuy'
import SmallItem from './homeComponents/SmallItem/SmallItem'
export default {
  // name:"Home",
  components: {
    mySwiper,
    Nav,
    TimeBuy,
    SmallItem
  },
  data(){
    return{
    
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.scroll=new BScroll(".home-main", {
        // 配置
        click: true,
        scrollX:true,
        probeType: 3
      
      });
    })
    
  }


}
</script>

<style lang='stylus' rel='stylesheet/stylus'>

</style>
