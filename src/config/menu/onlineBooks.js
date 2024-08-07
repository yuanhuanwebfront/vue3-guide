import GuoxuemengIcon from '@/assets/icon/online-book/guoxuemeng.jpeg';
import AihanyuIcon from '@/assets/icon/online-book/aihanyu.png';
import GuojiabookIcon from '@/assets/icon/online-book/guojiatushuguan.png';
import WereadIcon from '@/assets/icon/online-book/weread.png';
import ZLibraryIcon from '@/assets/icon/online-book/z-libray.png';
import MarksIcon from '@/assets/icon/online-book/makesi.gif';

const onlineBooks = [
  {
    path: '/online-book',
    meta: {
      title: '在线图书',
      icon: 'icon-book',
    },
    component: () => import('@/pages/onlineBook/index.vue'),
    
    navList: [
      {
        label: '国学书籍',
        list: [
          {
            label: '国学梦',
            icon: GuoxuemengIcon,
            link: 'http://www.guoxuemeng.com/guoxue/',
            desc: '国学经典 书籍在线阅读。国学经典书籍在线阅读，包括经、史、子、集、蒙。'
          },
          {
            label: '爱汉语网',
            icon: AihanyuIcon,
            link: 'https://2cn.cn/yd/',
            desc: '爱汉语网文学作品在线阅读'
          }
        ]
      },
      {
        label: '海量书籍',
        list: [
          {
            label: '中国国家图书馆',
            icon: GuojiabookIcon,
            link: 'http://read.nlc.cn/',
            desc: '提供国家图书馆馆藏数字化资源的检索及在线阅读服务，内容涵盖古籍、图书、论文、期刊、音视频、少儿资源等'
          },
          {
            label: '微信读书',
            icon: WereadIcon,
            link: 'https://weread.qq.com/',
            desc: '微信读书提供海量正版书籍、小说、漫画、公众号、听书，多设备同步实现跨屏阅读。与微信好友一起发现更多精品好书，随时交流感想，让阅读不再孤独。'
          },
          {
            label: '鸠摩搜索',
            link: 'https://www.jiumodiary.com/',
            icon: 'https://www2.jiumodiary.com/images/front/eleps.png',
            desc: 'Jiumo Search 鸠摩搜索 - 文档搜索引擎'
          },
          {
            label: 'Z-Library',
            icon: ZLibraryIcon,
            link: 'https://zh.z-library.se/?ts=0621',
            desc: 'Z-Library – 世界上最大的电子图书馆。自由访问知识和文化。'
          },
        ],
      },
      {
        label: '政治书籍',
        list: [
          {
            label: '马克思文库',
            icon: MarksIcon,
            link: 'https://www.marxists.org/chinese/index.html',
            desc: '马克思主义和共产主义历史文献和参考资料'
          }
        ]
      }
    ]
  }
]


export default onlineBooks;