import YoutubeIcon from '@/assets/icon/youtube.png';
import YoukuIcon from '@/assets/icon/youku.jpeg';
import TencentVideoIcon from '@/assets/icon/tencent-video.png';
import MovieRabbitIcon from '@/assets/icon/dianyingtu.png';
import JrkanIcon from '@/assets/icon/jrKan.png';
import HeibaiIcon from '@/assets/icon/heibai.png';

const onlineVideoList = [
  {
    label: '国外视频',
    list: [
      {
        label: 'youtube',
        icon: YoutubeIcon,
        link: 'https://www.youtube.com'
      }
    ],
  },
  {
    label: '国内视频',
    list: [
      {
        label: '腾讯视频',
        icon: TencentVideoIcon,
        link: 'https://v.qq.com/'
      },
      {
        label: '优酷',
        icon: YoukuIcon,
        link: 'https://youku.com/'
      },
      {
        label: '电影兔',
        icon: MovieRabbitIcon,
        link: 'https://www.dytdy.com/'
      }
    ]
  },
  {
    label: '比赛直播',
    list: [
      {
        label: 'JR-KAN直播',
        icon: JrkanIcon,
        link: 'http://www.jrkan2023.com/'
      },
      {
        label: '黑白直播',
        icon: HeibaiIcon,
        link: 'http://www.zuliao114.com/'
      }
    ]
  }
];

export default onlineVideoList;