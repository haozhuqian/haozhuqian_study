const children4 = [
  { name: "进入一生一芯进行学习" ,
  tooltip: {formatter: "2023年3月7日至往后..."},
},
];
const children311 = [
  { name: "计算机发展历程" },
  { name: "计算机系统层次结构" },
  { name: "计算机性能指标" },
];
const children3121 = [
  { name: "浮点数的表示" },
  { name: "浮点数的加减运算" },
];
const children3122 = [
  { name: "串行加法器和并行加法器" },
  { name: "算术逻辑单元的功能和结构" },
];
const children312 = [
  { name: "数制与编码" },
  { name: "定点数的表示与运算" },
  { name: "浮点数的表示与运算" ,children: children3121},
  { name: "算术逻辑单元(ALU)" ,children: children3122},
];
const children3131 = [
  { name: "多级存储系统" },
];
const children3132 = [
  { name: "SRAM和DRAM" },
  { name: "只读存储器" },
  { name: "主存储器的基本组成" },
];
const children3133 = [
  { name: "连接原理" },
  { name: "主存容量的扩展" },
  { name: "存储器和CPU的连接" },
];
const children3134 = [
  { name: "双端口RAM" },
  { name: "多模块存储器" },
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
  { name: "存储器层次化结构" ,children: children3131,},
  { name: "半导体随机存储器" ,children: children3132,},
  { name: "主存储器与·CPU的连接" ,children: children3133,},
  { name: "双端口RAM和多模式存储器" ,children: children3134,},
  { name: "高速缓冲存储器" ,children: children3135,},
  { name: "虚拟存储器" ,children: children3136,},
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
  { name: "指令格式" ,},
  { name: "指令寻址方式" ,children: children3141},
  { name: "CISC和RISC的基本概念" ,children: children3142},
];
const children3151 = [
  { name: "CPU的功能" },
  { name: "CPU的基本结构" },
];
const children3152 = [
  { name: "指令周期" },
  { name: "指令周期的数据流" },
];
const children3153 = [
  { name: "数据通路的功能" },
  { name: "数据通路的功能" },
];
const children3154 = [
  { name: "硬布控制器" },
  { name: "微程序控制器" },
];
const children315 = [
  { name: "CPU的功能和基本结构" ,children: children3151},
  { name: "指令执行过程" ,children: children3152},
  { name: "数据通路的功能和基本结构" ,children: children3153},
  { name: "控制器的功能和工作原理" ,children: children3154},
  { name: "指令流水线" ,},
];
const children316 = [
  { name: "总线仲裁" },
  { name: "总线操作和定时" },
  { name: "总线标准" },
];
const children3171 = [
  { name: "输入设备" },
  { name: "输出设备" },
  { name: "外存储器" },
];
const children3172 = [
  { name: "I\O接口的功能" },
  { name: "I\O接口基本结构" },
  { name: "I\O接口类型" },
  { name: "I\O端口及其编址" },
];
const children3173 = [
  { name: "程序查询方式" },
  { name: "程序中断方式" },
  { name: "DMA方式" },
];
const children317 = [
  { name: "外部设备" ,children: children3171},
  { name: "I\\O接口" ,children: children3172},
  { name: "I\\O方式" ,children: children3173},
];
const children31 = [
  { name: "计算机系统概述" ,children: children311},
  { name: "数据的表示和运算" ,children: children312},
  { name: "存储系统" ,children: children313},
  { name: "指令系统" ,children: children314},
  { name: "中央处理器" ,children: children315},
  { name: "总线" ,children: children316},
  { name: "输入\\输出系统" ,children: children317},
];
const children32 = [
  { name: "浮点数的表示以及加减运算" },
  { name: "双端口RAM和多模块存储器的内部原理以及实现" },
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
const children3 = [
  { name: "学习内容" ,children: children31 },
  {
    collapsed: true,
    name: "计算机组成原理学习",
    children: children4,
  },
  { name: "重点", children: children32 },
  {
    name: "难点",
    children: children33,
  },
];
const children24 = [
  {
    name: "作用实现信息传输",
    // symbol: "image://./img/时钟设计.png",
    // symbolSize: [200, 200],
  },
];
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
  { name: "结构化建模" },
  { name: "组合电路设计" },
  { name: "时序电路设计", children: children211 },
];
const children2 = [
  {
    name: "学习内容",
    children: children21,
  },
  {
    name: "重点",
    children: children22,
  },
  {
    collapsed: true,
    name: "Verilog学习",
    tooltip: {
      formatter: "2022年12月19日-2023年1月16日",
    },
    children: children3,
  },
  {
    name: "难点",
    children: children23,
  },
  {
    name: "实战",
    children: children24,
  },
];
const children16 = [
  {
    symbol: "image://./img/时钟设计.png",
    symbolSize: [200, 100],
    name: "作用：可以用于计时、校时和闹钟",
  },
];
const children15 = [
  { name: "复用器和译码器的内部实现原理以及应用" },
  { name: "锁存器和触发器内部实现原理以及应用" },
  { name: "有限状态机的分解" },
  { name: "Moore型状态机和Mealy型状态机" },
];
const children14 = [
  { name: "任意进制之间的转换" },
  { name: "卡诺图化简布尔代数" },
  { name: "复用器和译码器的内部原理以及应用" },
  { name: "锁存器和触发器的内部原理以及应用" },
  { name: "有限状态机内部原理的理解" },
  { name: "由电路图导出状态机" },
];
const children135 = [
  { name: "动态约束" },
  { name: "系统时序" },
  { name: "亚稳态" },
  { name: "同步器" },
];
const children134 = [
  { name: "状态编码" },
  { name: "Moore型状态机和Mealy型状态机" },
  { name: "状态机的分解" },
  { name: "电路图导出状态机" },
];
const children133 = [{ name: "同步时序电路" }, { name: "同步电路和异步电路" }];
const children132 = [
  { name: "D触发器" },
  { name: "寄存器" },
  { name: "带使能端的触发器" },
  { name: "带复位功能的触发器" },
];
const children131 = [{ name: "SR锁存器" }, { name: "D锁存器" }];
const children13 = [
  { name: "锁存器", collapsed: false, children: children131 },
  { name: "触发器", collapsed: false, children: children132 },
  { name: "同步逻辑设计", collapsed: false, children: children133 },
  { name: "有限状态机", collapsed: false, children: children134 },
  { name: "时序逻辑的时序", collapsed: false, children: children135 },
];
const children123 = [{ name: "传播延迟和最小延迟" }, { name: "毛刺" }];
const children122 = [
  { name: "复用器" },
  { name: "译码器" },
  { name: "编码器" },
];
const children121 = [{ name: "化简逻辑" }, { name: "无关项" }];
const children12 = [
  { name: "布尔代数" },
  { name: "多级组合逻辑" },
  { name: "卡诺图", collapsed: false, children: children121 },
  { name: "组合逻辑模块", collapsed: false, children: children122 },
  { name: "时序", collapsed: false, children: children123 },
];
const children11 = [
  { name: "二进制" },
  { name: "逻辑门" },
  { name: "nMOS和pMOS晶体管" },
];
const children1 = [
  {
    name: "二进制",
    collapsed: true,
    children: children11,
  },
  {
    name: "组合逻辑",
    collapsed: true,
    children: children12,
  },
  {
    collapsed: true,
    name: "时序逻辑",
    tooltip: {
      formatter: "数学基础介绍",
    },
    children: children13,
  },
  {
    collapsed: true,
    name: "数字电路",
    tooltip: {
      formatter: "2022年11月7日-2022年11月27日",
    },
    children: children2,
  },
  {
    collapsed: true,
    name: "重点",
    tooltip: {
      formatter: "数学基础介绍",
    },
    children: children14,
  },
  {
    collapsed: true,
    name: "难点",
    tooltip: {
      formatter: "数学基础介绍",
    },
    children: children15,
  },
  {
    collapsed: true,
    name: "实战",
    tooltip: {
      formatter: "数学基础介绍",
    },
    children: children16,
  },
];
const root = {
  collapsed: true,
  name: "CPU小组",
  tooltip: {formatter: ""},
  itemStyle: {},
  children: children1,
};

export default root;
