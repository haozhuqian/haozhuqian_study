const children5 = [
  { name: "AI概论" },
  { name: "阿里云大咖轮AI" },
  { name: "AI时代的职业规划" },
];
const children4 = [
  { name: "计算机视觉" ,link:"https://gitee.com/yundingshuyuan/yunding-aifamily/blob/dev/Learning-Route/6-Computer_Vision/2023%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A7%86%E8%A7%89%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92.md"},
  { name: "图像处理" },
  { name: "图像分类" },
  { name: "图像定位与监测" },
  {
    collapsed: true,
    name: "",
    children: children5,
  },
  { name: "NLP技术与应用" },
  { name: "机器阅读技术与应用" },
  { name: "开发语聊技术与应用" },
  { name: "自然语言处理" ,link:'https://gitee.com/yundingshuyuan/yunding-aifamily/tree/dev/Learning-Route/7-Natural_Language_Peocessing'},
];
const children3 = [
  { name: "传统机器学习" ,link:"https://gitee.com/yundingshuyuan/yunding-aifamily/blob/dev/Learning-Route/4-Statistical_Maching_Learning/2022%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92.md"},
  { name: "机器学习原理与实践" },
  { name: "强化学习原理与实践" },
  {
    collapsed: true,
    name: "",
    children: children4,
  },
  { name: "深度学习原理与实践" },
  { name: "深度学习" ,link:"https://gitee.com/yundingshuyuan/yunding-aifamily/blob/dev/Learning-Route/5-DeepLearning/2023%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92.md"},
];
const children21 = [
  {name:'Numpy实践'},
  {name:'Pandas实践'},
  {name:'Matplotlib实践'},
]
const children2 = [
  { name: "数学基础" ,link:"https://gitee.com/yundingshuyuan/yunding-aifamily/blob/dev/Learning-Route/0-Math/2022%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92.md"},
  { name: "最优化理论" },
  { name: "概率论与统计学" },
  { name: "线性代数" },
  { name: "微积分" },
  {
    collapsed: true,
    name: "",
    children: children3,
  },
  { name: "Python网络爬虫" },
  { name: "Python数据分析" ,children:children21},
  { name: "Python爬虫与数据分析" ,link:"https://gitee.com/yundingshuyuan/yunding-aifamily/blob/dev/Learning-Route/3-Data_Analysis/V-2022/V-2022/2022%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90-%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92.md"},
];
const children1 = [
  {
    name: "python学习",
    link: "https://gitee.com/yundingshuyuan/yunding-aifamily/blob/dev/Learning-Route/1-Python/V_2022/2022Python%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92.md",
  },
  { name: "python高级特性" },
  { name: "python基础语法" },
  {
    collapsed: true,
    name: "",
    children: children2,
  },
  { name: "Django框架" },
  { name: "Mysql基础" },
  { name: "Request基础" },
  {
    name: "Python网络编程",
    link: "https://gitee.com/yundingshuyuan/yunding-aifamily/blob/dev/Learning-Route/2-Python_Web/Django_In_Action/V_2022/Python%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B%E8%B7%AF%E7%BA%BF%E8%A7%84%E5%88%92.md",
  },
];
const root = {
  collapsed: true,
  name: "AI",
  children: children1,
};

export default root;
