import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import formValidations from '@/components/form-validations'
import menuExample from '@/components/menu-example'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard,
      children: [
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
