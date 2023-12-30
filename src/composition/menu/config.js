import onlineVideoList from "./online-video";

const menuOptions = [
  {
    label: '在线视频',
    path: '/online-video',
    icon: 'icon-video',
    list: [
      ...onlineVideoList
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