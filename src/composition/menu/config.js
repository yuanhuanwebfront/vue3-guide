import onlineVideoList from "./online-video";
import onlineBookList from "./online-book";
import videoDownloadList from "./video-download";

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
  },
  {
    label: '视频下载',
    path: '/video-download',
    icon: 'icon-video-download-line',
    list: [
      ...videoDownloadList
    ]
  }
];


export default menuOptions;