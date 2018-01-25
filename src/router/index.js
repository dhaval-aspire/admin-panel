import store from '../store'
import Vue from 'vue'
import Router from 'vue-router'
import * as types from '../store/mutation-types'
const dashboard = () => import('@/components/dashboard')
const formValidations = () => import('@/components/form-validations')
const menuExample = () => import('@/components/menu-example')
const home = () => import('@/components/home')
const wizard = () => import('@/components/wizard')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: dashboard,
      children: [
        {
          path: '',
          name: 'home',
          component: home
        },
        {
          path: '/form-validations',
          name: 'form-validations',
          component: formValidations
        },
        {
          path: '/menu-demo',
          name: 'menu-example',
          component: menuExample
        },
        {
          path: '/wizard',
          name: 'wizard',
          component: wizard
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit(types.CLOSE_MENU_EVENT)
  next()
})

export default router
