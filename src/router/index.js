import Vue from 'vue'
import Router from 'vue-router'
import front from '@/components/front'
import rear from '@/components/rear'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'front',
      component: front
    },
    {
      path: '/rear',
      name: 'rear',
      component: rear
    }
  ]
})
