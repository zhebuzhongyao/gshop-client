// 注册路由模块

import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'



export default [
    {
        path:'/msite',
        component:MSite,
        meta:{//显示底部导航
            showFooter:true
        }
    },
    {
        path:'/search',
        component:Search,
        meta:{//显示底部导航
            showFooter:true
        }
    },
    {
        path:'/order',
        component:Order,
        meta:{//显示底部导航
            showFooter:true
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{//显示底部导航
            showFooter:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{//不显示底部导航
            showFooter:false
        }
    },
    {
        path:'/',
        redirect:'/msite'
    }
]
