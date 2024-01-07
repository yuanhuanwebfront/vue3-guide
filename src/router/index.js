// 导入create函数
import { createRouter, createWebHashHistory } from 'vue-router';
// 导入Routes
import OnlineVideoRoutes from './onlineVideo/index';
import OnlineBookRoutes from './onlineBook/index';
import VideoDownloadRoutes from './videoDownload';
import GovermentRoutes from './goverment';
import ToolsRoutes from './tools';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      redirect: '/online-video',
      children: [
        ...OnlineVideoRoutes,
        ...OnlineBookRoutes,
        ...VideoDownloadRoutes,
        ...GovermentRoutes,
        ...ToolsRoutes
      ]
    },
  ]
})

export default router;

