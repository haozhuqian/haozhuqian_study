import style from "../style.js";

const theme = style.color.red[3];
const bgc = style.color.bgc;

const children4 = [
  {
    link: "http://ysyx.oscc.cc",
    name: "一生一芯",
    itemStyle: { color: theme },
    lineStyle: { color: theme },
    label: { color: theme },
    symbol: "diamond",
    symbolSize: 14,
    tooltip: {
      show: true,
      textStyle: { color: theme },
      textStyle: { color: theme },backgroundColor:bgc,formatter: "2023年3月7日至往后...",
    },
    itemStyle: {
      color: theme,
    },
  },
];
const children311 = [
  { name: "计算机发展历程" },
  { name: "计算机系统层次结构" },
  { name: "计算机性能指标" },
];
const children3121 = [{ name: "浮点数表示" }, { name: "浮点数加减运算" }];
const children3122 = [{ name: "串行和并行加法器" }, { name: "功能和结构" }];
const children312 = [
  { name: "数制与编码" },
  {
    name: "浮点数",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3121,
  },
  { name: "定点数的表示与运算" },
  {
    name: "算术逻辑单元",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3122,
  },
];
const children3131 = [{ name: "多级存储系统" }];
const children3132 = [
  { name: "SRAM和DRAM" },
  { name: "只读存储器" },
  { name: "主存储器基本组成" },
];
const children3133 = [
  { name: "连接原理" },
  { name: "主存容量的扩展" },
  { name: "存储器和CPU的连接" },
];
const children3135 = [
  { name: "Cache基本工作原理" },
  { name: "Cache和主存的映射方式" },
  { name: "Cache中主存块的替换算法" },
  { name: "Cache写策略" },
];
const children3136 = [
  { name: "页式虚拟存储器" },
  { name: "块表(TLB)" },
  { name: "段式虚拟存储器" },
  { name: "段页式虚拟存储器" },
];
const children313 = [
  {
    name: "存储器层次化结构",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3131,
  },
  {
    name: "半导体随机存储器",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3132,
  },
  { name: "双端口RAM" },
  { name: "多模块存储器" },
  {
    name: "主存储器与CPU的连接",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3133,
  },
  {
    name: "高速缓冲存储器",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3135,
  },
  {
    name: "虚拟存储器",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3136,
  },
];
const children3141 = [
  { name: "X86汇编指令入门" },
  { name: "常见的数据寻址方式" },
];
const children3142 = [
  { name: "复杂指令系统计算机" },
  { name: "精简指令系统计算机" },
];
const children314 = [
  {
    name: "指令寻址方式",
    label: { color: theme, backgroundColor: bgc },
    children: children3141,
  },
  { name: "指令格式" },
  {
    name: "CISC和RISC的基本概念",
    label: { color: theme, backgroundColor: bgc },
    children: children3142,
  },
];
const children3151 = [{ name: "功能" }, { name: "基本结构" }];
const children3152 = [{ name: "指令周期" }, { name: "数据流" }];
const children3153 = [{ name: "功能" }, { name: "基本结构" }];
const children3154 = [{ name: "硬布控制器" }, { name: "微程序控制器" }];
const children315 = [
  {
    name: "CPU",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3151,
  },
  {
    name: "指令执行过程",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3152,
  },
  {
    name: "数据通路",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3153,
  },
  {
    name: "控制器",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3154,
  },
  { name: "指令流水线" },
];
const children316 = [
  { name: "仲裁" },
  { name: "操作和定时" },
  { name: "标准" },
];
const children3171 = [
  { name: "输入设备" },
  { name: "输出设备" },
  { name: "外存储器" },
];
const children3172 = [
  { name: "功能" },
  { name: "基本结构" },
  { name: "类型" },
  { name: "IO端口及其编址" },
];
const children3173 = [
  { name: "程序查询方式" },
  { name: "程序中断方式" },
  { name: "DMA方式" },
];
const children317 = [
  {
    name: "外部设备",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3171,
  },
  {
    name: "I\\O接口",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3172,
  },
  {
    name: "I\\O方式",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children3173,
  },
];
const children31 = [
  {
    name: "计算机系统概述",
    collapsed: true,
    label: { color: theme, backgroundColor: bgc },
    children: children311,
  },
  {
    name: "数据的表示和运算",
    collapsed: true,
    label: { color: theme, backgroundColor: bgc },
    children: children312,
  },
  {
    name: "存储系统",
    collapsed: true,
    label: { color: theme, backgroundColor: bgc },
    children: children313,
  },
  {
    name: "指令系统",
    collapsed: true,
    label: { color: theme, backgroundColor: bgc },
    children: children314,
  },
  {
    name: "中央处理器",
    collapsed: true,
    label: { color: theme, backgroundColor: bgc },
    children: children315,
  },
  {
    name: "总线",
    collapsed: true,
    label: { color: theme, backgroundColor: bgc },
    children: children316,
  },
  {
    name: "输入\\输出系统",
    collapsed: true,
    label: { color: theme, backgroundColor: bgc },
    children: children317,
  },
];
const children32 = [
  { name: "浮点数的表示与加减运算" },
  { name: "双端口RAM和多模块存储器的内部原理与实现" },
  { name: "指令格式以及寻址方式的实现" },
  { name: "控制器的功能、基本结构和工作原理" },
  { name: "总线的内部操作" },
  { name: "I\\O接口的基本功能、基本结构和内部的工作原理" },
];
const children33 = [
  { name: "控制器的工作原理" },
  { name: "总线的内部操作" },
  { name: "I\\O接口的基本结构和内部的工作原理" },
];
const children34 = [
  {
    name: "计算机组成原理(艾伦·克莱门茨)",
    symbol: "diamond",
    link: "https://yundingshuyuan.feishu.cn/file/boxcnKtD2an497guzJHicGdiGSb",
  },
  {
    name: "王道计算机组成原理",
    symbol: "diamond",
    link: "https://yundingshuyuan.feishu.cn/file/boxcnkN4cBvIy2dZL55TWEPrTef",
  },
  {
    name: "计算机组成原理-慕课网(上)",
    symbol: "diamond",
    link: "https://www.bilibili.com/video/BV1fp4y1Y7vG/?spm_id_from=333.880.my_history.page.click&vd_source=c882380fc219a9f433deaf7053e5507e",
  },
  {
    name: "计算机组成原理-慕课网(中)",
    symbol: "diamond",
    link: "https://www.bilibili.com/video/BV1a5411h7fi/?spm_id_from=333.880.my_history.page.click",
  },
  {
    name: "计算机组成原理-慕课网(下)",
    symbol: "diamond",
    link: "https://www.bilibili.com/video/BV1pk4y1y77B/?spm_id_from=333.788.recommend_more_video.11&vd_source=c882380fc219a9f433deaf7053e5507e",
  },
];
const children3 = [
  {
    name: "学习内容",
    label: { color: theme, backgroundColor: bgc },
    children: children31,
  },
  {
    name: "参考资料",
    label: { color: theme, backgroundColor: bgc },
    children: children34,
  },
  {
    collapsed: true,
    name: "计算机组成原理",
    itemStyle: { color: theme },
    lineStyle: { color: theme },
    label: { color: theme, backgroundColor: bgc },

    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    tooltip: {
      show: true,
      textStyle: { color: theme },
      textStyle: { color: theme },backgroundColor:bgc,formatter: "2023年1月26日-2023年2月9日",
    },
    children: children4,
  },
  {
    name: "重点",
    label: { color: theme, backgroundColor: bgc },
    children: children32,
  },
  {
    name: "难点",
    label: { color: theme, backgroundColor: bgc },
    children: children33,
  },
];
const children25 = [
  {
    link: "https://www.bilibili.com/video/BV12y4y1v7V3/?spm_id_from=333.337.search-card.all.click&vd_source=fc9c57c54ab37601aa8bc5f22e2b76a1",
    name: "课程",
    tooltip: {
      textStyle: { color: theme },backgroundColor:bgc,formatter: "Verilog硬件描述语言-西安电子科技大学",
    },
  },
  {
    name: "Verilog在线测试平台",
    link: "https://verilogoj.ustc.edu.cn/oj/",
  },
  {
    name: "HDLBits — Verilog Practice",
    link: "https://hdlbits.01xz.net/wiki/Main_Page",
  },
];
// const children24 = [
//   {
//     name: "作用实现信息传输",
//     // symbol: "image://./img/时钟设计.png",
//     // symbolSize: [200, 200],
//   },
// ];
const children23 = [
  { name: "组合逻辑电路如何用Verilog实现以及应用" },
  { name: "时序组合电路如何用Verilog实现以及应用" },
  { name: "有限同步状态机用Verilog的实现" },
];
const children22 = [
  { name: "数据流建模的实现原理及其应用" },
  { name: "组合电路设计的实现" },
  { name: "时序电路设计的实现" },
  { name: "测试程序的内部原理以及实现" },
  { name: "典型电路的实现" },
];
const children211 = [{ name: "有限同步状态机" }];
const children21 = [
  { name: "数据流建模" },
  { name: "行为级建模" },
  {
    name: "时序电路设计",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children211,
  },
  { name: "结构化建模" },
  { name: "组合电路设计" },
];
const children2 = [
  {
    name: "学习内容",
    label: { color: theme, backgroundColor: bgc },
    children: children21,
  },
  {
    name: "参考资料",
    label: { color: theme, backgroundColor: bgc },
    children: children25,
  },
  // {
  //   name: "实战",
  //   children: children24,
  // },
  {
    collapsed: true,
    name: "Verilog",
    itemStyle: { color: theme },
    lineStyle: { color: theme },
    label: { color: theme, backgroundColor: bgc },

    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    tooltip: {
      show: true,
      textStyle: { color: theme },
      
      textStyle: { color: theme },backgroundColor:bgc,formatter: "2022年12月19日-2023年1月16日",
    },
    children: children3,
  },
  {
    name: "重点",
    label: { color: theme, backgroundColor: bgc },
    children: children22,
  },
  {
    name: "难点",
    label: { color: theme, backgroundColor: bgc },
    children: children23,
  },
];
// const children14 = [
//   {
//     symbol: "image://./img/时钟设计.png",
//     symbolSize: [200, 100],
//     name: "作用：可以用于计时、校时和闹钟",
//   },
// ];
const children13 = [
  { name: "复用器和译码器的内部实现原理以及应用" },
  { name: "锁存器和触发器内部实现原理以及应用" },
  { name: "有限状态机的分解" },
  { name: "Moore型状态机和Mealy型状态机" },
];
const children12 = [
  { name: "任意进制之间的转换" },
  { name: "卡诺图化简布尔代数" },
  { name: "复用器和译码器的内部原理以及应用" },
  { name: "锁存器和触发器的内部原理以及应用" },
  { name: "有限状态机内部原理的理解" },
  { name: "由电路图导出状态机" },
];
const children1135 = [
  { name: "动态约束" },
  { name: "系统时序" },
  { name: "亚稳态" },
  { name: "同步器" },
];
const children1134 = [
  { name: "状态编码" },
  { name: "Moore型状态机和Mealy型状态机" },
  { name: "状态机的分解" },
  { name: "电路图导出状态机" },
];
const children1133 = [{ name: "同步时序电路" }, { name: "同步电路和异步电路" }];
const children1132 = [
  { name: "D触发器" },
  { name: "带使能端的触发器" },
  { name: "带复位功能的触发器" },
  { name: "寄存器" },
];
const children1131 = [{ name: "SR锁存器" }, { name: "D锁存器" }];
const children113 = [
  {
    name: "锁存器",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children1131,
  },
  {
    name: "触发器",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children1132,
  },
  {
    name: "同步逻辑设计",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children1133,
  },
  {
    name: "有限状态机",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children1134,
  },
  {
    name: "时序逻辑的时序",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children1135,
  },
];
const children1123 = [{ name: "传播延迟和最小延迟" }, { name: "毛刺" }];
const children1122 = [
  { name: "复用器" },
  { name: "译码器" },
  { name: "编码器" },
];
const children1121 = [{ name: "化简逻辑" }, { name: "无关项" }];
const children112 = [
  {
    name: "卡诺图",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children1121,
  },
  { name: "布尔代数" },
  {
    name: "组合逻辑模块",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children1122,
  },
  { name: "多级组合逻辑" },
  {
    name: "时序",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children1123,
  },
];
const children111 = [
  { name: "二进制" },
  { name: "nMOS和pMOS晶体管" },
  { name: "逻辑门" },
];
const children11 = [
  {
    name: "二进制",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children111,
  },
  {
    name: "组合逻辑",
    collapsed: false,
    label: { color: theme, backgroundColor: bgc },
    children: children112,
  },
  {
    collapsed: false,
    name: "时序逻辑",
    tooltip: {
      textStyle: { color: theme },backgroundColor:bgc,formatter: "数学基础介绍",
    },
    label: { color: theme, backgroundColor: bgc },
    children: children113,
  },
];
const children1 = [
  {
    collapsed: true,
    name: "学习内容",
    label: { color: theme, backgroundColor: bgc },
    children: children11,
  },
  {
    name: "参考资料",
    label: { color: theme, backgroundColor: bgc },
    children: [
      {
        name: "数字设计和计算机体系结构",
        symbol: "diamond",
        link: "https://yundingshuyuan.feishu.cn/file/boxcnLX4q4jTRYW9qsbs1mIawjg",
      },
    ],
  },
  {
    collapsed: true,
    name: "数字电路",
    itemStyle: { color: theme },
    lineStyle: { color: theme },
    label: { color: theme, backgroundColor: bgc },
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    tooltip: {
      show: true,
      textStyle: { color: theme },
      textStyle: { color: theme },backgroundColor:bgc,formatter: "2022年11月7日-2022年11月27日",
    },
    children: children2,
  },
  {
    collapsed: true,
    name: "重点",
    label: { color: theme, backgroundColor: bgc },
    children: children12,
  },
  {
    collapsed: true,
    name: "难点",
    label: { color: theme, backgroundColor: bgc },
    children: children13,
  },
  // {
  //   collapsed: true,
  //   name: "实战",
  //   children: children14,
  // },
];
const root = {
  collapsed: true,
  name: "CPU小组",
  symbol: "arrow",
  symbolRotate: -90,
  symbolSize: 14,
  label: { color: theme, backgroundColor: bgc },
  itemStyle: { color: theme },
  lineStyle: { color: theme },
  children: children1,
};

export default root;