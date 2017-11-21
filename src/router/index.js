import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MetaCoin from '@/components/MetaCoin'
import SimpleStudy from '@/components/SimpleStudy'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/metacoin',
      name: 'MetaCoin',
      component: MetaCoin
    },
    {
      path: '/',
      name: 'SimpleStudy',
      component: SimpleStudy
    }
  ]
})
