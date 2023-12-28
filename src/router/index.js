// 导入create函数
import { createRouter, createWebHashHistory } from 'vue-router';
// 导入Routes
import OnlineVideoRoutes from './onlineVideo/index';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      redirect: '/online-video',
      children: [
        ...OnlineVideoRoutes,
      ]
    },
  ]
})

export default router;

