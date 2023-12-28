import YoutubeIcon from '@/assets/icon/youtube.png';

const menuOptions = [
  {
    label: '在线视频',
    path: '/online-video',
    icon: 'icon-video',
    list: [
      {
        label: '国外视频',
        list: [
          {
            label: 'youtube',
            icon: YoutubeIcon
          }
        ],
      },
      {
        label: '国内视频',
        list: [
          {
            label: '腾讯视频',
            icon: ''
          }
        ]
      }
    ]
  },
  {
    label: '在线图书',
    value: 'online-book',
    icon: 'icon-book',
    list: [

    ]
  }
];


export default menuOptions;