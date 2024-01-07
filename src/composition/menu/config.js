import onlineVideoList from "./online-video";
import onlineBookList from "./online-book";
import videoDownloadList from "./video-download";
import govermentList from "./goverment";
import toolsList from './tools';

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
  },
  {
    label: '政务部门',
    path: '/goverment',
    icon: 'icon-goverment',
    list: [
      ...govermentList
    ]
  },
  {
    label: '实用工具',
    path: '/tools',
    icon: 'icon-gongju-',
    list: [
      ...toolsList
    ]
  }
];


export default menuOptions;