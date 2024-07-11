import onlineVideoConfig from "@/config/menu/onlineVideo";
import onlineBooksConfig from "@/config/menu/onlineBooks";
import videoDownloadConfig from "@/config/menu/videoDownload";
import govermentConfig from '@/config/menu/goverment';
import ToolsConfig from '@/config/menu/tool';

const ALL_MENU_OPTIONS = [
  onlineVideoConfig[0],
  onlineBooksConfig[0],
  videoDownloadConfig[0],
  govermentConfig[0],
  ToolsConfig[0],
];

const menuOptions = ALL_MENU_OPTIONS.map(item => {
  return {
    label: item.meta.title,
    path: item.path,
    icon: item.meta.icon,
    list: [
      ...item.navList
    ]
  }
})

export default menuOptions;