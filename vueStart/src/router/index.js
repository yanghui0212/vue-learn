import Vue from 'vue'
import Router from 'vue-router'
import manage from '@/page/manage'
import login from '@/page/login'
import wayList from '@/page/wayList'
import trackList from '@/page/trackList'
import explain from '@/page/explain'
import home from '@/page/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/manage',
      component: manage,
      name: '',
      children: [
        {
          path: '',
          component: home,
          meta: [],
        },
        {
          path: '/wayList',
          component: wayList,
          meta: ['数据管理', '渠道列表'],
        },
        {
          path: '/trackList',
          component: trackList,
          meta: ['数据管理', '物流列表'],
        },
        {
          path: '/explain',
          component: explain,
          meta: ['说明', '说明'],
        }
      ]
    }
  ]
})
