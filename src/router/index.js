import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index/Index.vue'
import Appointment from '@/page/Appointment/Appointment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/appointment',
      name: 'Appointment',
      component: Appointment
    }
  ]
})
