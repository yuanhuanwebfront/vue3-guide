import YoutubeIcon from '@/assets/icon/online-video/youtube.png';
import YoukuIcon from '@/assets/icon/online-video/youku.jpeg';
import TencentVideoIcon from '@/assets/icon/online-video/tencent-video.png';
import MovieRabbitIcon from '@/assets/icon/online-video/dianyingtu.png';
import JrkanIcon from '@/assets/icon/online-video/jrKan.png';
import HeibaiIcon from '@/assets/icon/online-video/heibai.png';
import YangshipinIcon from '@/assets/icon/online-video/yangshipin.png';

const onlineVideoList = [
  {
    label: '国外视频',
    list: [
      {
        label: 'youtube',
        icon: YoutubeIcon,
        link: 'https://www.youtube.com',
        desc: '在 YouTube 上畅享你喜爱的视频和音乐，上传原创内容并与亲朋好友和全世界观众分享你的视频。'
      }
    ],
  },
  {
    label: '国内视频',
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
        label: '电影兔',
        icon: MovieRabbitIcon,
        link: 'https://www.dytdy.com/',
        desc: '电影兔影视涵盖最新电影、电视剧、综艺、动漫、纪录片、微电影等经典影视类型，更新快、观影不卡 、电脑手机平板多终端自适应浏览。'
      },
      {
        label: '央视频',
        icon: YangshipinIcon,
        link: 'https://www.yangshipin.cn/#/',
        desc: '央视频 - 央视、卫视直播'
      }
    ]
  },
  {
    label: '比赛直播',
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
      }
    ]
  }
];

export default onlineVideoList;