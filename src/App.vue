<template>
  <div>
    
    <router-view></router-view>
    <!--显示或者隐藏底部导航this.$route.meta.showFooter,showFooter是个布尔值，true代表显示，false代表隐藏，在路由（routes）里配置-->
    <FooterGuide v-show="this.$route.meta.showFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
    components: {
      FooterGuide,
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
