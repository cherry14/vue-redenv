import Vue from 'vue'
import Router from 'vue-router'
import Red from '@/components/red'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      
      component: Red
    }
  ]
})
