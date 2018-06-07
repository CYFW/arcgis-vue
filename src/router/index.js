import Vue from 'vue'
import Router from 'vue-router'
import ArcgisTdt from '@/components/ArcgisTdt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArcgisTdt',
      component: ArcgisTdt
    }
  ]
})
