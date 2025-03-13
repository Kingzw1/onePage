import { createWebHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'GlobalLayout',
    component: () => import('@/layout/layout.vue'),
    children: [
      {
        path: '/', // 匹配根路径 '/'
        redirect: '/home'
      },
      {
        path: 'home', // 相对路径
        name: 'DashboardHome',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' } // 推荐添加元信息
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录' }
  }
  // 其他路由...
];


const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router;