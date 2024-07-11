import onlineVideoConfig from "@/config/menu/onlineVideo";
import onlineBooksConfig from "@/config/menu/onlineBooks";

import videoDownloadList from "./video-download";
import govermentList from "./goverment";
import toolsList from './tools';

const menuOptions = [
  {
    label: onlineVideoConfig[0].meta.title,
    path: onlineVideoConfig[0].path,
    icon: onlineVideoConfig[0].meta.icon,
    list: [
      ...onlineVideoConfig[0].navList
    ]
  },
  {
    label: onlineBooksConfig[0].meta.title,
    path: onlineBooksConfig[0].path,
    icon: onlineBooksConfig[0].meta.icon,
    list: [
      ...onlineBooksConfig[0].navList
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