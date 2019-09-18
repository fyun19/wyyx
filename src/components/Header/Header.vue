<template>
  <header class="header-container">
    <div class="header-search-login">
      <!-- logo -->
      <span class="logo"></span>
      <!-- 搜索框 -->
      <div class="searchInput">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品，共2344款好物</span>
      </div>
      <button @click="$router.push('/profile')">登录</button>
    </div>
    <div class="header-nav" v-if="isOpen">
      <ul class="header-nav-left">
        <li><a href="javascript:;">推荐</a></li>
        <li><a href="javascript:;">居家生活</a></li>
        <li><a href="javascript:;">服饰鞋包</a></li>
        <li><a href="javascript:;">美食酒水</a></li>
        <li><a href="javascript:;">个护清洁</a></li>
        <li><a href="javascript:;">母婴亲子</a></li>
        <li><a href="javascript:;">运动旅行</a></li>
        <li><a href="javascript:;">数码家电</a></li>
        <li><a href="javascript:;">全球特色</a></li>
      </ul>
      <!-- 小箭头 -->
      <!-- <span class="iconfont icon-54 header-nav-arrow" @click="toggleShow"></span> -->
      <span class="iconfont icon-54 header-nav-arrow"    >
        <img src="./images/xiaojiantou.png" alt="" @click="toggleShow">
      </span>
      
    </div>
    <!-- 下拉菜单 -->
    <div v-if="!isOpen" class="toggle-wrap">
      <div class="nav-box">
        <div class="all-category">
          <span>全部频道</span>
          <i class="iconfont icon-53" @click="toggleShow"></i>
        </div>
        <ul class="cateTag">
          <li><a href="javascript:;">推荐</a></li>
          <li><a href="javascript:;">居家生活</a></li>
          <li><a href="javascript:;">服饰鞋包</a></li>
          <li><a href="javascript:;">美食酒水</a></li>
          <li><a href="javascript:;">个护清洁</a></li>
          <li><a href="javascript:;">母婴亲子</a></li>
          <li><a href="javascript:;">运动旅行</a></li>
          <li><a href="javascript:;">数码家电</a></li>
          <li><a href="javascript:;">全球特色</a></li>
        </ul>
        <div class="mask"></div>
      </div>
    </div>
  </header>
</template>

<script>
// 引入better-scroll
import BScroll from 'better-scroll'
export default {
    props: {

    },
    data() {
        return {
            isOpen:true
        };
    },
    methods:{
      toggleShow(){
        this.isOpen = !this.isOpen
      },
      mounted(){
        
      }
    }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import "../../common/stylus/mixins.styl"
.header-container
  position relative
  height 150px
  width 100%
  background-color #fff
  z-index 100
  .header-search-login
    display flex
    justify-content space-around
    align-items center
    width 100%
    height 88px
    padding 25px
    font-size 30px
    box-sizing border-box
    .logo 
      flex 2
      height 40px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
      background-repeat no-repeat
      background-size 138px 40px
      background-position center
      margin-right 10px
    .searchInput
      flex 7
      height 56px
      border-radius 10px
      border none
      background-color rgba(0,0,0,.1)
      text-align center
      line-height 56px
      i 
        font-size 30px
      .placeholder
        font-size 30px
        color #666
    button 
      flex 1
      height 40px
      margin-left 10px
      font-size 24px
      border-radius 10px
      color #b4282d
      border 1px solid #b4282d
      background-color #fff
  .header-nav
    position relative
    width 100%
    height 60px
    overflow hidden
    .header-nav-left
      width 1650px
      font-size 30px
      height 60px
      li
        float left
        height 50px
        margin 5px 20px
        padding 0 10px
        text-align center
        &.active
          border-bottom 4px solid red
          a
            color red
    .header-nav-arrow
      position absolute
      width 100px
      height 60px
      right 0
      top 0
      font-size 30px
      text-align center
      line-height 60px
      background-color #fff
      
  .toggle-wrap
    .nav-box
      position absolute
      left 0
      top 90px
      width 100%
      z-index 10
      background-color #fff
      .all-category
        display flex
        justify-content space-between
        font-size 28px
        height 60px
        margin 0 0 20px
        text-align center
        span 
          margin-left 30px
        i 
          width 100%
          height 60px
          font-size 30px
      ul
        clearFix()
        width 100%
        font-size 24px
        text-align center
        box-sizing border-box
        li
          float left
          width 150px
          height 56px
          text-align center
          line-height 56px
          border-radius 5px
          margin 0 0 40px 30px
          background-color #FAFAFA
          box-sizing border-box
          &.on
              border 1px solid $red
      .mask
        width 100%
        height 100%
        background-color rgba(0,0,0,.5)

          
         


        

</style>
