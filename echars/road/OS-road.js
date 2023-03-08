const children5 = [
  { name: 'AI概论', },
  { name: '阿里云大咖轮AI', },
  { name: 'AI时代的职业规划', },
]
const children4 = [
  { name: '计算机视觉', },
  { name: '图像处理', },
  { name: '图像定位与监测', },
  { name: '图像分类', },
  {
    collapsed: true,
    name: '',
    children: children5,
  },
  { name: 'NLP技术与应用', },
  { name: '机器阅读技术与应用', },
  { name: '开发语聊技术与应用', },
  { name: '自然语言处理', },
]
const children3 = [
  { name: '统计机器学习', },
  { name: '机器学习原理与实践', },
  { name: '强化学习原理与实践', },
  {
    collapsed: true,
    name: '',
    children: children4,
  },
  { name: '深度学习原理与实践', },
  { name: '深度学习', },
]
const children2 = [
  { name: 'python网络编程', },
  { name: 'Mysql数据库', },
  { name: 'Djiango实战', },
  { name: 'python网络爬虫', },
  {
    collapsed: true,
    name: '',
    children: children3,
  },
  { name: 'numpy实践', },
  { name: 'pandas实践', },
  { name: 'matplotlib实践', },
  { name: '数据分析', },
]
const children1 = [
  {
      
  link: "https://haozhuqian.github.io/",
    name: 'python基础语法',
    tooltip: {
      formatter: 'python基础语法介绍'
    },
  },
  {
    name: 'python进阶',
    tooltip: {
      formatter: 'python基础语法介绍'
    },
    link: ""
  },
  {
    name: 'python',
    tooltip: {
      formatter: 'python介绍'
    },
    link: "",

  },
  {
    name: 'python高级特性',
    tooltip: {
      formatter: 'python高级特性介绍'
    },
    link: ""
  },
  {
    collapsed: true,
    name: '',
    tooltip: {
      formatter: '数学基础介绍'
    },
    children: children2,
  },
  { name: '概率论', },
  { name: '线性代数', },
  { name: '最优化', },
  { name: '数学基础', },
]
const root={
collapsed:true,
  name: 'AI',
  lable: "",
  tooltip: {
    formatter: '介绍<br/>另一行介绍<br/>可以有很多行，大小与最大行宽适应'
  },
  itemStyle: {},
  children: children1,
};






export default root