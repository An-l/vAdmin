import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from 'views/layout'

Vue.use(Router)

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('views/login'), hidden: true },
  { path: '/404', component: () => import('views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('views/dashboard')
      },
      {
        name: 'Home',
        path: 'home',
        component: () => import('views/home'),
        meta: { title: 'Home' }
      }
    ]
  },
  {
    path: '/userList',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'UserList',
        component: () => import('views/userList'),
        meta: { title: '用户管理' }
      }
    ]
  },
  {
    path: '/postList',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'PostList',
        component: () => import('views/postList'),
        meta: { title: '文章管理' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }), // 每次切换路由都滚动到页头
  routes: constantRouterMap
})
