import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AddSmoothie from '@/components/AddSmoothie'
import EditSmoothie from '@/components/EditSmoothie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:  'Index',
      component: Index
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    },
    { 
      // notice the ":" means the path is subject to change based on each individual object
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component:EditSmoothie
    }
  ]
})

