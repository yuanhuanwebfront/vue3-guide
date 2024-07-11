import YoutubeIcon from '@/assets/icon/online-video/youtube.png';
import YoukuIcon from '@/assets/icon/online-video/youku.jpeg';
import TencentVideoIcon from '@/assets/icon/online-video/tencent-video.png';
import MovieRabbitIcon from '@/assets/icon/online-video/dianyingtu.png';
import JrkanIcon from '@/assets/icon/online-video/jrKan.png';
import HeibaiIcon from '@/assets/icon/online-video/heibai.png';
import YangshipinIcon from '@/assets/icon/online-video/yangshipin.png';
import HanjuWangIcon from '@/assets/icon/online-video/hanjuwang.png';
import NbaReplayIcon from '@/assets/icon/online-video/nbareplay.png';

const onlineVideos = [
  {
    path: '/online-video',
    meta: {
      title: '在线视频',
      icon: 'icon-video'
    },
    component: () => import('@/pages/onlineVideo/index.vue'),

    navList: [
      {
        label: '官方视频',
        list: [
          {
            label: '腾讯视频',
            icon: TencentVideoIcon,
            link: 'https://v.qq.com/',
            desc: '腾讯视频-中国领先的在线视频媒体平台,海量高清视频在线观看'
          },
          {
            label: '优酷',
            icon: YoukuIcon,
            link: 'https://youku.com/',
            desc: '优酷 - 为好内容全力以赴 - 海量正版高清视频在线观看'
          },
          {
            label: 'youtube',
            icon: YoutubeIcon,
            link: 'https://www.youtube.com',
            desc: '在 YouTube 上畅享你喜爱的视频和音乐，上传原创内容并与亲朋好友和全世界观众分享你的视频。'
          },
          {
            label: '央视频',
            icon: YangshipinIcon,
            link: 'https://www.yangshipin.cn/#/',
            desc: '央视频 - 央视、卫视直播'
          },
        ],
      },
      {
        label: '第三方影视',
        list: [
          
          {
            label: '电影兔',
            icon: MovieRabbitIcon,
            link: 'https://www.dytdy.com/',
            desc: '电影兔影视涵盖最新电影、电视剧、综艺、动漫、纪录片、微电影等经典影视类型，更新快、观影不卡 、电脑手机平板多终端自适应浏览。'
          },
          
          {
            label: '韩剧网',
            icon: HanjuWangIcon,
            link: 'https://www.hanritai.com/',
            desc: '韩剧网-韩剧DVD是国内最大的中文韩剧网站，提供最新韩剧,好看的韩剧在线观看、韩剧收视率、韩剧排行榜、韩剧剧照海报、韩国电影、剧情介绍、韩剧音乐、韩国明星写真、韩剧动态等相关韩剧服务。'
          }
        ]
      },
      {
        label: 'NBA直播回放',
        list: [
          {
            label: 'JR-KAN直播',
            icon: JrkanIcon,
            link: 'http://www.jrkan2023.com/',
            desc: 'JRKAN直播是知名体育平台,主要为足球迷,篮球迷,电竞等提供直播,新闻资讯,比分数据,原创分析,视频集锦等服务'
          },
          {
            label: '黑白直播',
            icon: HeibaiIcon,
            link: 'http://www.zuliao114.com/',
            desc: '黑白体育直播-提供免费无插件足球直播、nba直播、黑白体育赛事、黑白英超直播、黑白nba直播，所有精彩都在黑白直播体育。'
          },
          {
            label: 'NBA-Video',
            icon: NbaReplayIcon,
            link: 'https://basketball-video.com/',
            desc: 'NBA回放集合，配合外网访问更加流畅。'
          }
        ]
      }
    ]
  }
]


export default onlineVideos;