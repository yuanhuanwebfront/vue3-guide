const ToolsRoutes = [
  {
    path: '/tools',
    component: () => import('@/pages/tools/index.vue')
  },
  {
    path: '/tools/copyBoard',
    component: () => import('@/pages/tools/copyboard/index.vue')
  }
]


export default ToolsRoutes;