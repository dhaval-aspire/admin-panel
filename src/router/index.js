import store from '../store'
import Vue from 'vue'
import Router from 'vue-router'
import * as types from '../store/mutation-types'
const dashboard = () => import('@/components/dashboard')
const formValidations = () => import('@/components/form-validations')
const menuExample = () => import('@/components/menu-example')
const home = () => import('@/components/home')
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
