import Vue from 'vue'
import Router from 'vue-router'
import ye1 from '@/components/ye1.vue'
import ye2 from '@/components/ye2.vue'
import ye3 from '@/components/ye3.vue'
import pl from '@/components/pl.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path:'/ye1',
      component:ye1
    },{
      path:'/ye2',
      component:ye2
    },{
      path:'/ye3',
      component:ye3
    },
    {
      path:'/pl',
      component:pl
    },{
      path:'/*',
      component:pl
    }
  ]
})
