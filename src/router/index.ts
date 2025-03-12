import { createMemoryHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'GlobalLayout',
    redirect: '/home', // 默认重定向
    component: () => import('@/layout/layout.vue'),
    children: [
      {
        path: 'home', // 相对路径
        name: 'DashboardHome',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' } // 推荐添加元信息
      }
    ]
  },
  // 其他路由...
];


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;