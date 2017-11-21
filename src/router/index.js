import Vue from 'vue'
import Router from 'vue-router'
import SimpleStudyDescription from '@/components/SimpleStudyDescription'
import SimpleStudy from '@/components/SimpleStudy'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SimpleStudyDescription',
      component: SimpleStudyDescription
    },
    {
      path: '/simplestudy',
      name: 'SimpleStudy',
      component: SimpleStudy
    }
  ]
})
