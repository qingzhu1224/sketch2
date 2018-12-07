import Vue from 'vue'
import Router from 'vue-router'
import IconComponent from '../components/IconComponent/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IconComponent',
      component: IconComponent
    }
  ]
})
