import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import FirstComponent from '@/components/FirstComponent'
import SecondComponent from '@/components/SecondComponent'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/second',
      name: 'second-component',
      component: SecondComponent
    },
    {
      path: '/first',
      name: 'first-component',
      component: FirstComponent
    }
  ]
})
