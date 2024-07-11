import RenminbankIcon from '@/assets/icon/goverment/renminyinhang.jpeg';
import HuijinIcon from '@/assets/icon/goverment/huijin.jpeg';
import XianzhujianIcon from '@/assets/icon/goverment/xianzhujianju.png';
import GongxinbuIcon from '@/assets/icon/goverment/gongxinbu.png';
import TongjijuIcon from '@/assets/icon/goverment/tongjiju.png';

const goverment = [
  {
    path: '/goverment',
    meta: {
      title: '政务部门',
      icon: 'icon-goverment',
    },
    component: () => import('@/pages/goverment/index.vue'),
    
    navList: [
      {
        label: '经济部门',
        list: [
          {
            label: '中国人民银行',
            icon: RenminbankIcon,
            link: 'https://www.pbc.gov.cn/',
            desc: '中国人民银行'
          },
          {
            label: '中央汇金',
            icon: HuijinIcon,
            link: 'http://www.huijin-inv.cn/huijin-inv/index.shtml',
            desc: '中央汇金投资有限责任公司',
          }
        ]
      },
      {
        label: '政策部门',
        list: [
          {
            label: '工信部',
            icon: GongxinbuIcon,
            link: 'https://www.miit.gov.cn/zwgk/index.html',
            desc: '中华人民共和国工业和信息化部网站政务公开频道'
          },
          {
            label: '国家统计局',
            icon: TongjijuIcon,
            link: 'https://www.stats.gov.cn/',
            desc: '国家统计局的官方网站，是国家统计局对外发布信息，服务社会公众的唯一网络窗口'
          }
        ]
      },
      {
        label: '地方部门',
        list: [
          {
            label: '西安住建局',
            icon: XianzhujianIcon,
            link: 'https://zjj.xa.gov.cn/zw/zfxxgkml/zwxx/gsgg/fcscjy/1.html',
            desc: '西安市住房和城乡建设局，政府信息公开文件报道'
          },
          {
            label: '西安住房销售公示',
            icon: XianzhujianIcon,
            link: 'https://zfyxdj.xa.gov.cn/zfrgdjpt/index.html',
            desc: '西安市商品住房销售公示平台--西安市住房和城乡建设局|西安市轨道交通建设办公室'
          }
        ]
      }
    ]
  }
]


export default goverment;