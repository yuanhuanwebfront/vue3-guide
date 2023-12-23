// 导入create函数
import { createRouter, createWebHashHistory } from 'vue-router';
// 导入Routes
import HomeRoutes from './home/index';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...HomeRoutes
  ]
})

export default router;

