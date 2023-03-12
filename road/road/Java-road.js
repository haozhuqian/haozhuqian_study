import style from "../style.js";

const theme = style.color.orange[2];
const bgc = style.color.bgc;


const children5 = [
  {
    itemStyle: { color: theme },
    name: "JDK",
  },
  {
    itemStyle: { color: theme },
    name: "JRE",
  },
  {
    itemStyle: { color: theme },
    name: "JUC",
  },
];
const children4 = [
  {
    name: "反射，注解",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%A4%A7%E4%B8%80%E4%B8%8B%E5%9C%A8%E6%A0%A1%E7%A0%94%E5%AD%A6%E8%B7%AF%E7%BA%BF/%E4%BA%91%E9%A1%B6%E4%B9%A6%E9%99%A2Java%E6%96%B9%E5%90%91%E5%A4%A7%E4%B8%80%E4%B8%8B%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1.md",
  },
  {
    name: "Spring5",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%A4%A7%E4%B8%80%E4%B8%8B%E5%9C%A8%E6%A0%A1%E7%A0%94%E5%AD%A6%E8%B7%AF%E7%BA%BF/%E4%BA%91%E9%A1%B6%E4%B9%A6%E9%99%A2Java%E6%96%B9%E5%90%91%E5%A4%A7%E4%B8%80%E4%B8%8B%E7%AC%AC%E4%BA%8C%E9%98%B6%E6%AE%B5%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1.md",
  },
  {
    name: "SpringMVC",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%A4%A7%E4%B8%80%E4%B8%8B%E5%9C%A8%E6%A0%A1%E7%A0%94%E5%AD%A6%E8%B7%AF%E7%BA%BF/%E4%BA%91%E9%A1%B6%E4%B9%A6%E9%99%A2Java%E6%96%B9%E5%90%91%E5%A4%A7%E4%B8%80%E4%B8%8B%E7%AC%AC%E4%B8%89%E9%98%B6%E6%AE%B5%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1.md",
  },
  {
    collapsed: true,
    name: "框架",
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    itemStyle: { color: theme },
    label: { color: theme, backgroundColor: bgc },
    children: children5,
  },
  {
    name: "Mybatis",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%A4%A7%E4%B8%80%E4%B8%8B%E5%9C%A8%E6%A0%A1%E7%A0%94%E5%AD%A6%E8%B7%AF%E7%BA%BF/%E4%BA%91%E9%A1%B6%E4%B9%A6%E9%99%A2Java%E6%96%B9%E5%90%91%E5%A4%A7%E4%B8%80%E4%B8%8B%E7%AC%AC%E5%9B%9B%E9%98%B6%E6%AE%B5%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1.md",
  },
  {
    name: "MybatisPlus",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%A4%A7%E4%B8%80%E4%B8%8B%E5%9C%A8%E6%A0%A1%E7%A0%94%E5%AD%A6%E8%B7%AF%E7%BA%BF/%E4%BA%91%E9%A1%B6%E4%B9%A6%E9%99%A2Java%E6%96%B9%E5%90%91%E5%A4%A7%E4%B8%80%E4%B8%8B%E7%AC%AC%E4%BA%94%E9%98%B6%E6%AE%B5%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1.md",
  },
  {
    name: "SpringBoot",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%A4%A7%E4%B8%80%E4%B8%8B%E5%9C%A8%E6%A0%A1%E7%A0%94%E5%AD%A6%E8%B7%AF%E7%BA%BF/%E4%BA%91%E9%A1%B6%E4%B9%A6%E9%99%A2Java%E6%96%B9%E5%90%91%E5%A4%A7%E4%B8%80%E4%B8%8B%E7%AC%AC%E5%85%AD%E9%98%B6%E6%AE%B5%E5%AD%A6%E4%B9%A0%E4%BB%BB%E5%8A%A1.md",
  },
];
const children3 = [
  {
    name: "Git",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E7%AC%AC%E4%B8%89%E9%98%B6%E6%AE%B5%EF%BC%88JavaWeb%EF%BC%89/Phase_Three_learning_tasks_1.md",
  },
  {
    name: "HTML，Tomcat",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E7%AC%AC%E4%B8%89%E9%98%B6%E6%AE%B5%EF%BC%88JavaWeb%EF%BC%89/Phase_Three_learning_tasks_2.md",
  },
  {
    name: "Mavem，Servlet",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E7%AC%AC%E4%B8%89%E9%98%B6%E6%AE%B5%EF%BC%88JavaWeb%EF%BC%89/Phase_Three_learning_tasks_3.md",
  },
  {
    collapsed: true,
    name: "JavaWeb",
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    itemStyle: { color: theme },
    label: { color: theme, backgroundColor: bgc },
    children: children4,
  },
  {
    name: "JSP",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E7%AC%AC%E4%B8%89%E9%98%B6%E6%AE%B5%EF%BC%88JavaWeb%EF%BC%89/Phase_Three_learning_tasks_4.md",
  },
  {
    name: "会话技术",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E7%AC%AC%E5%9B%9B%E9%98%B6%E6%AE%B5%EF%BC%88Web%E6%8B%93%E5%B1%95%EF%BC%89/Phase_Four_learning_tasks_1.md",
  },
];
const children2 = [
  {
    name: "MySQL",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E7%AC%AC%E4%BA%8C%E9%98%B6%E6%AE%B5%EF%BC%88MySQL%EF%BC%89/Phase_Two_learning_tasks_1.md",
  },
  {
    collapsed: true,
    name: "MySQL",
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    itemStyle: { color: theme },
    label: { color: theme, backgroundColor: bgc },
    children: children3,
  },
  {
    name: "JDBC",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E7%AC%AC%E4%BA%8C%E9%98%B6%E6%AE%B5%EF%BC%88MySQL%EF%BC%89/Phase_Two_learning_tasks_2.md",
  },
];
const children1 = [
  {
    name: "Java基础语法",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.yunliyunwai.cn/blog/detail/ce31de8f82d10af436bdb00ae5a7c101",
  },
  {
    name: "面向对象（基础）",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.yunliyunwai.cn/blog/detail/64efb08810f53d8890232eb29c951bb0",
  },
  {
    name: "面向对象（进阶）",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.yunliyunwai.cn/blog/detail/9757fcf1a3d8c69c02e2b7fa0daa1637",
  },
  {
    collapsed: true,
    itemStyle: { color: theme },
    name: "JavaSE",
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    label: { color: theme, backgroundColor: bgc },
    children: children2,
  },
  {
    name: "核心类",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.yunliyunwai.cn/blog/detail/64fb3abbd2241f04832c0fc67b4e9b10",
  },
  {
    name: "异常，泛型，集合",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5%EF%BC%88JavaSE%EF%BC%89/Phase_One_learning_tasks_1.md",
  },
  {
    name: "IO",
    itemStyle: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    link: "https://gitee.com/yundingshuyuan/yun-ding-java-talent-pathering-place/blob/Variable/Java_learning_path/2022/%E5%AF%92%E5%81%87%E5%AD%A6%E4%B9%A0%E8%B7%AF%E7%BA%BF/%E7%AC%AC%E4%B8%80%E9%98%B6%E6%AE%B5%EF%BC%88JavaSE%EF%BC%89/Phase_One_learning_tasks_2.md",
  },
];
const root = {
  collapsed: true,
  name: "Java",
  itemStyle: { color: theme },
  lineStyle: { color: theme },
  symbol: "arrow",
  symbolRotate: -90,
  symbolSize: 14,
  label: { color: theme, backgroundColor: bgc },
  tooltip: { backgroundColor:bgc,formatter: "{b}" },
  children: children1,
};

export default root;
