import YinfansiIcon from '@/assets/icon/video-download/yinfansi.png';
import BtnullIcon from '@/assets/icon/video-download/btnull.png';

const videoDownload = [
  {
    path: '/video-download',
    meta: {
      title: '视频下载',
      icon: 'icon-video-download-line',
    },
    component: () => import('@/pages/videoDownload/index.vue'),

    navList: [
      {
        label: '电影下载',
        list: [
          {
            label: '无名小站',
            icon: BtnullIcon,
            link: 'https://www.btnull.org/',
            desc: '电视剧、电影、动画网盘迅雷下载'
          },
          {
            label: '音范丝',
            icon: YinfansiIcon,
            link: 'https://www.yinfans.me/',
            desc: '音范丝是一个搜集、精选的高品质电影资源网站。精选4K蓝光原盘下载,顶级收藏'
          }
        ]
      }
    ]
  }
]


export default videoDownload;