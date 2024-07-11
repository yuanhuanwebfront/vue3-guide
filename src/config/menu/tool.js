const tools = [
  {
    path: '/tools',
    meta: {
      title: '实用工具'
    },
    component: () => import('@/pages/tools/index.vue'),
  },
  {
    path: '/tools/copyBoard',
    meta: {
      title: '实用工具 / 剪切板'
    },
    component: () => import('@/pages/tools/copyboard/index.vue')
  },
  {
    path: '/tools/timeStamp',
    meta: {
      title: '实用工具 / 时间戳转换'
    },
    component: () => import('@/pages/tools/timeStamp/index.vue')
  }
]


export default tools;