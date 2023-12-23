# Vue 项目构造

## 1. Vite 初始化项目
+ [vite官网](https://cn.vitejs.dev/)
+ 初始化命令： `npm create vite@latest`
+ 添加css预处理器:   `npm add -D sass`
+ 定义全局变量
```javascript
  export default defineConfig({
    define: {
      __APP_VERSION__: JSON.stringify('v1.0.0'),
      __API_URL__: 'window.__backend_api_url',
    },
  })
```
+ 添加路径解析
```javascript
  export default defineConfig({
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  })
```

## 2. 添加 vue-router 路由功能
+ [vue-router官网](https://router.vuejs.org/zh/)
+ 安装 `npm install vue-router@4`
+ 设置  routes
```javascript
  const HomeRoutes = [
    {
      path: '/home',
      component: () => import('@/pages/home/index.vue')
    }
  ]
```
+ 设置router
```javascript
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
```
