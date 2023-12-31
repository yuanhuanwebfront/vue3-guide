import onlineVideoList from "./online-video";
import onlineBookList from "./online-book";

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
    path: '/online-book',
    icon: 'icon-book',
    list: [
      ...onlineBookList
    ]
  }
];


export default menuOptions;