import style from "../style.js";

const theme = style.color.red[3];
const bgc = style.color.bgc;

const children51 = [
  { name: "操作系统启动" },
  { name: "操作系统接口" },
  { name: "系统调用的实现" },
  { name: "CPU管理的直观想法" },
  { name: "多进程图像" },
  { name: "用户级线程" },
  { name: "内核级线程" },
  { name: "CPU调度策略" },
  { name: "进程同步与信号量" },
  { name: "信号量的临界区保" },
  { name: "内存分区与分页" },
  { name: "多级页表和块表" },
  { name: "内存换出" },
  { name: "生磁盘的使用" },
  { name: "文件使用磁盘的实现" },
  { name: "目录与文件系统" },
];
const children52 = [
  {
    name: "30天自制操作系统·",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/file/boxcnfMclRMtnR5TpP3lRykG9rh",
  },
  {
    name: "深入Linux内核架构",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/file/boxcn7ntFZopPETnWUHwxhxLR3i",
  },
  {
    name: "计算机操作系统原理",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1NG4y137ze/?spm_id_from=333.999.0.0",
  },
  {
    name: "使用C++编写一个操作系统",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1RX4y157CM/?spm_id_from=333.999.0.0",
  },
  {
    name: "操作系统原理-哈尔滨工业大学",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1iW411Y73K?p=1",
  },
];
const children53 = [
  { name: "信号量的临界区保" },
  { name: "死锁的处理以及原理" },
];
const children54 = [
  { name: "内存如何进行换出处理" },
  { name: "段页结合应如何存入内存" },
];
const children5 = [
  {
    name: "学习内容",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children51,
  },
  {
    name: "推荐资料",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children52,
  },
  {
    name: "操作系统",
    tooltip: { backgroundColor:bgc,formatter: "2023年3月6日-2023年3月26日" },
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
  },
  {
    name: "重点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children53,
  },
  {
    name: "难点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children54,
  },
];
const children411 = [
  { name: "计算机发展历程" },
  { name: "计算机系统层次结构" },
  { name: "计算机性能指标" },
];
const children4121 = [{ name: "浮点数的表示" }, { name: "浮点数的加减运算" }];
const children4122 = [
  { name: "串行加法器和并行加法器" },
  { name: "算术逻辑单元的功能和结构" },
];
const children412 = [
  { name: "数制与编码" },
  {
    name: "浮点数的表示与运算",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4121,
  },

  {
    name: "算术逻辑单元(ALU)",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4122,
  },
  { name: "定点数的表示与运算" },
];
const children4131 = [
  { name: "SRAM和DRAM" },
  { name: "只读存储器" },
  { name: "主存储器的基本组成" },
];
const children4132 = [
  { name: "连接原理" },
  { name: "主存容量的扩展" },
  { name: "存储器和CPU的连接" },
];
const children4133 = [{ name: "双端口RAM" }, { name: "多模块存储器" }];
const children4134 = [
  { name: "Cache基本工作原理" },
  { name: "Cache和主存的映射方式" },
  { name: "Cache中主存块的替换算法" },
  { name: "Cache写策略" },
];
const children4135 = [
  { name: "页式虚拟存储器" },
  { name: "块表(TLB)" },
  { name: "段式虚拟存储器" },
  { name: "段页式虚拟存储器" },
];
const children413 = [
  {
    name: "半导体随机存储器",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4131,
  },
  {
    name: "主存储器与·CPU的连接",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4132,
  },
  { name: "存储器层次化结构" },
  {
    name: "双端口RAM和多模式存储器",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4133,
  },
  {
    name: "高速缓冲存储器",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4134,
  },
  {
    name: "虚拟存储器",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4135,
  },
];
const children4141 = [
  { name: "X86汇编指令入门" },
  { name: "常见的数据寻址方式" },
];
const children4142 = [
  { name: "复杂指令系统计算机" },
  { name: "精简指令系统计算机" },
];
const children414 = [
  {
    name: "指令寻址方式",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4141,
  },
  { name: "指令格式" },
  {
    name: "CISC和RISC的基本概念",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4142,
  },
];
const children4151 = [{ name: "CPU的功能" }, { name: "CPU的基本结构" }];
const children4152 = [{ name: "指令周期" }, { name: "指令周期的数据流" }];
const children4153 = [
  { name: "数据通路的功能" },
  { name: "数据通路的基本功能" },
];
const children4154 = [{ name: "硬布控制器" }, { name: "微程序控制器" }];
const children415 = [
  {
    name: "CPU的功能和基本结构",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4151,
  },
  {
    name: "指令执行过程",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4152,
  },
  { name: "指令流水线" },
  {
    name: "数据通路的功能和基本结构",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4153,
  },
  {
    name: "控制器的功能和工作原理",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4154,
  },
];
const children416 = [
  { name: "总线仲裁" },
  { name: "总线操作和定时" },
  { name: "总线标准" },
];
const children4171 = [
  { name: "输入设备" },
  { name: "输出设备" },
  { name: "外存储器" },
];
const children4172 = [
  { name: "I\\O接口的功能" },
  { name: "I\\O接口基本结构" },
  { name: "I\\O接口类型" },
  { name: "I\\O端口及其编址" },
];
const children4173 = [
  { name: "程序查询方式" },
  { name: "程序中断方式" },
  { name: "DMA方式" },
];
const children417 = [
  {
    name: "外部设备",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4171,
  },
  {
    name: "I\\O接口",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4172,
  },
  {
    name: "I\\O方式",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4173,
  },
];
const children41 = [
  {
    name: "计算机系统概述",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children411,
  },
  {
    name: "数据的表示和运算",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children412,
  },
  {
    name: "存储系统",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children413,
  },
  {
    name: "指令系统",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children414,
  },
  {
    name: "中央处理器",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children415,
  },
  {
    name: "总线",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children416,
  },
  {
    name: "输入输出系统",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children417,
  },
];
const children42 = [
  {
    name: "计算机组成原理(艾伦·克莱门茨)",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/file/boxcnKtD2an497guzJHicGdiGSb",
  },
  {
    name: "王道计算机组成原理",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/file/boxcnkN4cBvIy2dZL55TWEPrTef",
  },
  {
    name: "计算机组成原理-慕课网(上)",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1fp4y1Y7vG/?spm_id_from=333.880.my_history.page.click&vd_source=c882380fc219a9f433deaf7053e5507e",
  },
  {
    name: "计算机组成原理-慕课网(中)",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1a5411h7fi/?spm_id_from=333.880.my_history.page.click",
  },
  {
    name: "计算机组成原理-慕课网(下)",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1pk4y1y77B/?spm_id_from=333.788.recommend_more_video.11&vd_source=c882380fc219a9f433deaf7053e5507e",
  },
];
const children43 = [
  { name: "浮点数的表示以及加减运算" },
  { name: "双端口RAM和多模块存储器的内部原理以及实现" },
  { name: "指令格式以及寻址方式的实现" },
  { name: "控制器的功能、基本结构和工作原理" },
  { name: "总线的内部操作" },
  { name: "I\\O接口的基本功能、基本结构和内部的工作原理" },
];
const children44 = [
  { name: "控制器的工作原理" },
  { name: "总线的内部操作" },
  { name: "I\\O接口的基本结构和内部的工作原理" },
];
const children4 = [
  {
    name: "学习内容",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children41,
  },
  {
    name: "参考资料",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children42,
  },
  {
    name: "计算机组成原理",
    tooltip: { backgroundColor:bgc,formatter: "2023年1月26日-2023年2月9日" },
    label: { color: theme, backgroundColor: bgc },
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    itemStyle: { color: theme },
    children: children5,
  },
  {
    name: "重点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children43,
  },
  {
    name: "难点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children44,
  },
];
const children311 = [
  { name: "find命令" },
  { name: "grep和xargs命令" },
  { name: "gzip和bzip2命令" },
  { name: "gdb调试" },
  { name: "vim的基本操作" },
  { name: "gcc编译" },
  { name: "动态库和静态库的基本实现" },
  { name: "计算机系统层次结构" },
  { name: "makefile的基本语法" },
];
const children312 = [
  { name: "read和write的使用" },
  { name: "fcntl修改文件属性" },
  { name: "lseek进行进行光标偏移" },
  { name: "dup和dup2函数的使用" },
];
const children3141 = [
  { name: "管道" },
  { name: "文件用于进程间通信" },
  { name: "mmap映射用于进程间通信" },
];
const children314 = [
  { name: "pcb进程控制块" },
  { name: "fork函数创建子进程" },
  { name: "getpid和gitppid或者进程ID" },
  {
    name: "进程间通信",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children3141,
  },
  { name: "exec函数族" },
  { name: "孤儿进程和僵尸进程" },
  { name: "wait和waitpid回收子进程" },
];
const children315 = [
  { name: "信号屏蔽字" },
  { name: "未决信号集" },
  { name: "信号四要素" },
  { name: "信号集操作函数" },
  { name: "signal实现信号捕捉" },
];
const children316 = [{ name: "全局变量共享" }];
const children317 = [
  { name: "读写锁" },
  { name: "死锁" },
  { name: "静态初始化条件变量和互斥量" },
];
const children31 = [
  {
    name: "基础命令",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children311,
  },
  {
    name: "文件读写操作",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children312,
  },
  { name: "递归目录的实现" },
  {
    name: "进程间操作",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children314,
  },
  {
    name: "信号",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children315,
  },
  {
    name: "线程",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children316,
  },
  {
    name: "锁",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children317,
  },
];
const children32 = [
  {
    name: "Linux系统编程",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1KE411q7ee/?spm_id_from=333.999.0.0",
  },
  {
    name: "shell脚本讲解",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1xB4y1v7qT/?spm_id_from=333.999.0.0&vd_source=c882380fc219a9f433deaf7053e5507e",
  },
  {
    name: "Linux内核源码与嵌入式驱动开发",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1yM41167z9/?spm_id_from=333.999.0.0&vd_source=c882380fc219a9f433deaf7053e5507e",
  },
  {
    name: "鸟哥的linux私房菜",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/file/boxcn00bLKNL2BvLfoF02ldPTLY",
  },
];
const children33 = [
  { name: "gdb的调试的基本应用" },
  { name: "Makefile的基础语法以及应用" },
  { name: "对文件读写操作进行灵活运用" },
  { name: "父子关系之间的共享关系" },
  { name: "进程间通信" },
  { name: "捕捉信号" },
];
const children34 = [
  { name: "Makefile的使用" },
  { name: "mmap函数进行进程间通信的操作" },
  { name: "dup2函数的底层理解" },
  { name: "线程全局变量共享" },
  { name: "锁的静态初始化条件变量和互斥量" },
];
const children3 = [
  {
    name: "学习内容",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children31,
  },
  {
    name: "参考资料",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children32,
  },
  {
    collapsed: true,
    name: "系统编程",
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    tooltip: {
      backgroundColor:bgc,formatter: "2022年12月19日-2023年1月16日",
    },
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children4,
  },
  {
    name: "重点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children33,
  },
  {
    name: "难点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children34,
  },
];
const children211 = [
  { name: "typedef用法" },
  { name: "void用法" },
  { name: "sizeof用法" },
  { name: "变量的间接赋值" },
  { name: "栈区和堆区" },
  { name: "const全局和局部变量区别" },
  { name: "字符串常量区" },
];
const children212 = [{ name: "函数调用流程" }, { name: "函数调用惯例" }];
const children213 = [
  { name: "指针的步长" },
  { name: "指针的间接赋值" },
  { name: "指针做函数参数的输入特性" },
  { name: "指针做函数参数的输出特征" },
];
const children214 = [
  { name: "结构体深拷贝和浅拷贝" },
  { name: "结构体嵌套一级指针" },
  { name: "结构体嵌套二级指针" },
];
const children215 = [{ name: "配置文件读写" }];
const children216 = [
  { name: "链表的创建" },
  { name: "链表的插入" },
  { name: "链表的删除" },
  { name: "链表的逆序算法" },
];
const children217 = [{ name: "动态库和静态库" }, { name: "面向接口编程" }];
const children21 = [
  {
    name: "基础知识回顾",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children211,
  },
  {
    name: "行为级建模",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children212,
  },
  {
    name: "结构化建模",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children213,
  },
  {
    name: "组合电路设计",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children214,
  },
  {
    name: "时序电路设计",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children215,
  },
  {
    name: "结构化建模",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children216,
  },
  {
    name: "组合电路设计",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children217,
  },
];
const children22 = [
  {
    name: "C提高课程",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/drive/folder/fldcnjX96V5SHLmcldULrqw90tc?from=space_persnoal_filelist",
  },
  {
    name: "数据结构课程",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/drive/folder/fldcnRO2d0jkhpXzKUQYQK6Axab?from=space_persnoal_filelist",
  },
  {
    name: "《C perimer plus》第六版精解",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1LG411W75k/?spm_id_from=333.999.0.0&vd_source=c882380fc219a9f433deaf7053e5507e",
  },
  {
    name: "C提高",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/file/boxcnMo91QYzntcpYTd9r6DH9Ud",
  },
  {
    name: "数据结构(C语言版)",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/file/boxcnvFrMkr4onoUXknPx3Iayjb",
  },
];
const children23 = [
  { name: "对堆栈的性质的理解·以及应用" },
  { name: "对全局变量以及局部变量的区分" },
  { name: "对指针的深刻理解" },
  { name: "指针在结构体灵活的嵌套使用" },
  { name: "指针在自创函数中的嵌套使用" },
  { name: "运用二级指针能够对文件进行读写" },
  { name: "对链表的基本操作" },
];
const children24 = [
  { name: "结构体中嵌套二级指针的使用" },
  { name: "在自创函数参数中使用二级指针" },
  { name: "使用二级指针对文件进行读写操作" },
  { name: "对链表进行增删改查等基本操作" },
];
const children2 = [
  {
    name: "学习内容",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children21,
  },
  {
    name: "参考资料",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children22,
  },
  {
    collapsed: true,
    name: "C语言-提高",
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    tooltip: {
      backgroundColor:bgc,formatter: "2022年11月14日-2022年11月26日",
    },
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children3,
  },
  {
    name: "重点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children23,
  },
  {
    name: "难点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children24,
  },
];
const children111 = [
  { name: "通配符" },
  { name: "文件搜索" },
  { name: "伪目标" },
  { name: "多目标" },
  { name: "静态模式" },
  { name: "自动生成依赖性" },
];
const children112 = [
  { name: "显示命令" },
  { name: "命令执行" },
  { name: "嵌套执行make" },
  { name: "定义命令包" },
];
const children113 = [
  { name: "变量中的变量" },
  { name: "追加变量" },
  { name: "override指示符" },
];
const children1141 = [
  { name: "subst" },
  { name: "patsubst" },
  { name: "strip" },
  { name: "findsting" },
  { name: "filter" },
  { name: "filter-out" },
  { name: "sort" },
  { name: "word" },
  { name: "wordlist" },
  { name: "words" },
  { name: "firstword" },
];
const children1142 = [
  { name: "dir" },
  { name: "notdir" },
  { name: "suffix" },
  { name: "basename" },
  { name: "addsuffix" },
  { name: "addprefix" },
  { name: "join" },
  { name: "foreach" },
];
const children114 = [
  {
    name: "字符串处理函数",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children1141,
  },
  {
    name: "文件名操作函数",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children1142,
  },
  { name: "origin函数" },
  { name: "shell函数" },
  { name: "控制make函数" },
];
const children115 = [
  { name: "make的退出码" },
  { name: "指定Makefile" },
  { name: "指定目标" },
  { name: "检查规则" },
  { name: "make的参数" },
];
const children1161 = [
  { name: "自动化变量" },
  { name: "模式匹配" },
  { name: "重载内建隐含规则" },
];
const children116 = [
  { name: "隐含规则使用变量" },
  { name: "隐含规则链" },
  {
    name: "定义模式规则",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children1161,
  },
  { name: "老式风格的“后缀规则”" },
  { name: "隐含规则搜索算法" },
];
const children117 = [
  { name: "函数库文件的成员" },
  { name: "函数库成员的隐含规则" },
  { name: "函数库文件的后缀规则" },
];
const children11 = [
  {
    name: "书写规则",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children111,
  },
  {
    name: "书写命令",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children112,
  },
  {
    name: "使用变量",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children113,
  },
  {
    name: "使用函数",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children114,
  },
  {
    name: "make的运行",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children115,
  },
  {
    name: "隐含规则",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children116,
  },
  {
    name: "使用make更新函数库文件",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children117,
  },
];
const children12 = [
  {
    name: "Makefile从入门到项目编译实战",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://www.bilibili.com/video/BV1Xt4y1h7rH/?spm_id_from=333.337.search-card.all.click&vd_source=c882380fc219a9f433deaf7053e5507e",
  },
  {
    name: "静态模式的理解以及应用",
    symbol: "diamond",
    symbolSize: 14,
    link: "https://yundingshuyuan.feishu.cn/file/boxcnKKTqFkU0Q5UweJqa8IEAeb",
  },
];
const children13 = [
  { name: "静态模式的内部构造理解以及应用场景" },
  { name: "字符串处理函数的理解及其应用场景" },
  { name: "隐含规则变量的理解" },
];
const children14 = [
  { name: "伪目标的理解以及实践" },
  { name: "静态模式的理解以及应用" },
  { name: "字符串处理函数和文件名操作函数的理解以及应用" },
  { name: "隐含规则使用变量的应用" },
];
const children1 = [
  {
    name: "学习内容",
    collapsed: true,
    children: children11,
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
  },
  {
    name: "参考资料",
    collapsed: true,
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children12,
  },
  {
    collapsed: true,
    name: "Makefile",
    tooltip: {
      backgroundColor:bgc,formatter: "2022年11月7日-2022年11月13日",
    },
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children2,
  },
  {
    name: "难点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children13,
  },
  {
    collapsed: true,
    name: "重点",
    label: { color: theme, backgroundColor: bgc },
    itemStyle: { color: theme },
    children: children14,
  },
];
const root = {
  collapsed: true,
  name: "OS小组",
  symbol: "arrow",
  symbolRotate: -90,
  symbolSize: 14,
  label: { color: theme, backgroundColor: bgc },
  itemStyle: { color: theme },
  lineStyle: { color: theme },
  children: children1,
};

export default root;
