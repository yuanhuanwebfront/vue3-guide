import ChartGptIcon from '@/assets/icon/tools/chartGpt.png';
import WenxinyiyanIcon from '@/assets/icon/tools/wenxinyiyan.png';
import CopyBoardIcon from '@/assets/icon/tools/copyboard.png';
import TimeStampIcon from '@/assets/icon/tools/timestamp.png';

const tools = [
  {
    path: '/tools',
    meta: {
      title: '实用工具',
      icon: 'icon-gongju-',
    },
    component: () => import('@/pages/tools/index.vue'),

    navList: [
      {
        label: '人工智能',
        list: [
          {
            label: 'ChartGPT',
            icon: ChartGptIcon,
            link: 'https://chat.openai.com/',
            desc: 'ChatGPT是一个免费使用的人工智能系统。使用它进行引人入胜的对话，获得见解，自动化任务，见证人工智能的未来，所有这些都在一个地方。'
          },
          {
            label: '文心一言',
            icon: WenxinyiyanIcon,
            link: 'https://yiyan.baidu.com/',
            desc: '百度全新一代知识增强大语言模型，文心大模型家族的新成员，能够与人对话互动、回答问题、协助创作，高效便捷地帮助人们获取信息、知识和灵感'
          }
        ]
      },
      {
        label: '记录备忘工具',
        list: [
          {
            label: '剪切板记录',
            icon: CopyBoardIcon,
            type: 'page',
            link: '/tools/copyBoard',
            desc: '用来记录和存储一些常用的文案，方便快速复制'
          },
          {
            label: '时间戳转换工具',
            icon: TimeStampIcon,
            type: 'page',
            link: '/tools/timestamp',
            desc: '时间戳转换工具，方便快速转换时间戳'
          }
        ]
      }
    ]
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