const ToolsRoutes = [
  {
    path: '/tools',
    component: () => import('@/pages/tools/index.vue')
  },
  {
    path: '/tools/copyBoard',
    component: () => import('@/pages/tools/copyboard/index.vue')
  },
  {
    path: '/tools/timeStamp',
    component: () => import('@/pages/tools/timeStamp/index.vue')
  }
]


export default ToolsRoutes;