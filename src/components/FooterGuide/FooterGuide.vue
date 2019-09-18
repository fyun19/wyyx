<template>
  <ul>
    <li :class="{on: $route.path === '/home'}" @click="goTo('/home')">
      <span class="footer-icon">
        <img src="./images/footer.png" alt="icon">
      </span>
      <span>首页</span>
    </li>
    <li :class="{on: $route.path === '/cateList' || $route.path.indexOf('/cateList') !== -1}" @click="goTo('/cateList')">
      <span class="footer-icon" >
        <img src="./images/footer.png" alt="icon">
      </span>
      <span>分类</span>
    </li>
    <li :class="{on: $route.path === '/recommend' || $route.path.indexOf('/recomThings') !== -1}" @click="goTo('/recomThings')">
      <span class="footer-icon">
        <img src="./images/footer.png" alt="icon">
      </span>
      <span>识物</span>
    </li>
    <li :class="{on: $route.path === '/shopCart'}" @click="goTo('/shopCart')">
      <span class="footer-icon">
        <img src="./images/footer.png" alt="icon">
      </span>
      <span>购物车</span>
    </li>
    <li :class="{on: $route.path === '/profile'}" @click="goTo('/profile')">
      <span class="footer-icon">
        <img src="./images/footer.png" alt="icon">
      </span>
      <span>个人</span>
    </li>
  </ul>
</template>
<script>
  export default {
    methods: {
       // 根据传入的地址，跳转到对应的路由界面
      goTo (path) {
        this.$router.replace(path);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  ul
    position fixed
    bottom 0
    left 0
    display flex
    justify-content space-around
    height 100px
    width 100%
    font-size 24px
    background-color #fff
    margin-top -100px
    li
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      .footer-icon
        position relative
        width 40px
        height 40px
        overflow hidden
        img
          position absolute
          left 0
          top 0
          width 40px
          height 490px
      &:nth-child(1)
        img 
          top -245px
      &:nth-child(2)
        img 
          top -147px
      &:nth-child(3)
        img 
          top -343px
      &:nth-child(4)
        img 
          top -49px
      &:nth-child(5)
        img 
          top -441px
      &.on
        color red
        img
          transform translateY(49px)
</style>
