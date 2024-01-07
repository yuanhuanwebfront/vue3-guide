
import ChartGptIcon from '@/assets/icon/tools/chartGpt.png';
import WenxinyiyanIcon from '@/assets/icon/tools/wenxinyiyan.png';

const toolsList = [
  {
    label: '人工智能',
    list: [
      {
        label: 'ChartGPT',
        icon: ChartGptIcon,
        link: 'https://chat.openai.com/',
        desc: 'ChatGPT是一个免费使用的人工智能系统。使用它进行引人入胜的对话，获得见解，自动化任务，见证人工智能的未来，所有这些都在一个地方。'
      },
      {
        label: '文心一言',
        icon: WenxinyiyanIcon,
        link: 'https://yiyan.baidu.com/',
        desc: '百度全新一代知识增强大语言模型，文心大模型家族的新成员，能够与人对话互动、回答问题、协助创作，高效便捷地帮助人们获取信息、知识和灵感'
      }
    ]
  }
];

export default toolsList;