import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login'
import Login2 from '@/components/Login2'
import NextMain from '@/components/NextMain'
import register from '@/components/register'
import welcome  from '@/components/welcome'
import usesma  from '@/components/usesma'
import shixi  from '@/components/shixi'
import jianzhi from '@/components/jianzhi'
import order from '@/components/order'
import caipin from '@/components/caipin'
Vue.use(VueRouter)
export default  new VueRouter({
  routes:[
    {path:'/',redirect:'/register' },
    {path:'/register',name:'register',component:register},
    {path:'/login',component:Login},
    {path:'/login2',name:'login2',component:Login2},
    {path:'/nextmain',component:NextMain,
    redirect:'/welcome',
    children:[
      {path:'/welcome',name:'welcome',component:welcome},
      {path:'/usesma',name:'usesma',component:usesma},
      {path:'/shixi',name:'shixi',component:shixi},
      {path:'/jianzhi',name:'jianzhi',component:jianzhi},
      {path:'/order',name:'order',component:order},
      {path:'/caipin',name:'caipin',component:caipin},
    ]},
  ]

})


