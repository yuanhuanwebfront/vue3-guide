import videoDownloadConfigs from "@/config/menu/videoDownload";
import { transformConfigToRoutes } from '@/util/util';

const VideoDownloadRoutes = transformConfigToRoutes(videoDownloadConfigs)


export default VideoDownloadRoutes;