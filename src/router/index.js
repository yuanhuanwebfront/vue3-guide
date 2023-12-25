// 导入create函数
import { createRouter, createWebHashHistory } from 'vue-router';
// 导入Routes
import HomeRoutes from './home/index';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      children: [
        ...HomeRoutes,
      ]
    },
  ]
})

export default router;

