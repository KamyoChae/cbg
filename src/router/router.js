
import Vue from 'vue'
import Router from 'vue-router'  
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import("../components/Index")
    },
    {
      path: '/comIndex',
      name: 'comIndex',
      component:  () => import("../components/comInfo/comIndex"),
      children:[
        {
          path: '/comIndex/TabBaseData',
          name: 'TabBaseData',
          component:  () => import("../components/comTab/TabBaseData"),
        }
      ]
    }
  ]
})