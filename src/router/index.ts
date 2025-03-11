import { createMemoryHistory, createRouter, type RouteRecordRaw  } from 'vue-router'

const routes:RouteRecordRaw[] = [
  { path: '/', component:()=>import("../views/home/index.vue") },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router;