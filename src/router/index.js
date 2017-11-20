import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MetaCoin from '@/components/MetaCoin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/metacoin',
      name: 'MetaCoin',
      component: MetaCoin
    }
  ]
})
