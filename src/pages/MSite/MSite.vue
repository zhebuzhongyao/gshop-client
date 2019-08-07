<template>
  <section class="msite">
    <!--首页头部-->
    <Header :title="address.name || '正在定位中...'">
      <span class="header_search" slot='left'>
          <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot='right'>
          <span class="header_login_text">登录|注册</span>
      </span>
    </Header>   
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(c,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com'+c.image_url">
              </div>
              <span>{{c.title}}</span>
            </a>
          </div>
          
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <Shops/>
  </section>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'//需要用模块化方式引入
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.js'
import chunk from 'ladash/chunk'
import {mapState} from 'vuex'
import Shops from '../../components/Shops/Shops'


  

  export default {

    components:{
      Shops
    },
    
    async mounted() {
      this.$store.dispatch('getAddress')
      // 创建swiper之后，轮播没有效果（没有小圆点且无法轮播）1，利用dispatch的返回值：dispatch返回一个promise，promise成功的状态？状态更新且界面更新之后成功，所以可以将轮播卸载dispatch之后
      await this.$store.dispatch('getCategorys')
        new Swiper('.swiper-container',{
          loop:true,
          pagination: {
          el: '.swiper-pagination',
        },
      })
      
    },
    computed: {
      ...mapState(['address','categorys'])
    },

    categorysArr(){
      return chunk(this.categorys,8)
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
  &.msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    </style>
