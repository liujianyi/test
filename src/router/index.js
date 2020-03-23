import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [ 
      {
        path:"/",
        component:()=>import('@/components/A'),
         redirect:'/B',
         children:[{
          path:'/B',
          component:()=>import('@/components/B')
        },
        {
          path:'/D',
          component:()=>import('@/components/D')
        },{
        path:'/C',
        component:()=>import('@/components/C')
        }
      ]
        
      },
      {
        path:'/C',
        component:()=>import('@/components/C'),
        redirect:'/B',
        children:[{
            path:'/B',
            component:()=>import('@/components/B')
          },
          {
            path:'/A',
            component:()=>import('@/components/A')
          },
          {
            path:'/D',
            component:()=>import('@/components/D')
          }
       ]
      },{
        path:"/E",
        component:()=>import('@/components/E')
      }
    
  ]
})
