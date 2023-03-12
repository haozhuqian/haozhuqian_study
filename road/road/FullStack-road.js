import style from "../style.js";

const theme = style.color.green[1];
const bgc = style.color.bgc;

const children5 = [
  {
    itemStyle: { color: theme },
    name: "NodeJS基础",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `NodeJS<br/><br/>

    之前接触与学习的JavaScript大多在浏览器中运行<br/><br/>
    
    但JS不止于此<br/><br/>
    
    NodeJS同样可以作为JavaScript的运行平台<br/><br/>
    
    这使得JS有了成为后端语言的可能`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "云服务器前置知识",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `云服务器<br/><br/>

    了解计算机网络相关知识<br/><br/>
    
    学习远程连接云服务器<br/><br/>
    
    进行简单的网页挂载<br/><br/>
    
    尝试编写接口代码`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "MYSQL学习",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `MYSQL<br/><br/>

    MYSQL时一种典型的关系型数据库<br/><br/>
    
    学习使用SQL语言对数据库进行操作`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "NodeJS进阶",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `NodeJS<br/><br/>

      学习NodeJS模块化内容<br/><br/>
    
      学习强大的Express框架 创建GET POST接口 安装跨域中间件<br/><br/>
    
      学习NodeJS中的MySQL模块 完成对数据库的增删改查`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "Redis入门",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `Redis<br/><br/>

    Redis是一种非关系型数据库<br/><br/>
    
    学习基于内存的数据库<br/><br/>
    
    与之前学的MySQL有鲜明对比<br/><br/>
    
    拥有将近每秒10W+的读写能力`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "TypeScript学习",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `TypeScript<br/><br/>

      TypeScript 是 JavaScript 的严格语法超集<br/><br/>
    
      提供了可选的静态型别检查<br/><br/>

      在服务器端的复杂企业项目中大放异彩`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "尝试一种ORM框架",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `ORM框架<br/><br/>

      ORM（Object Relational Mapping 对象关系映射）<br/><br/>
    
      无需在代码中编写原生的SQL语句<br/><br/>

      减少开发者对原生SQL的学习成本，更好的理解与上手`,
    },
  },
];
const children4 = [
  {
    itemStyle: { color: theme },
    name: "Vue的基本语法",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `Vue<br/><br/>

      在寒假的项目实战介绍后<br/><br/>
      
      同学们更深刻的了解到原生JS在频繁操作网页时的疲惫<br/><br/>
      
      前端框架的出现则正式为了简化操作<br/><br/>
      
      同时将操作网页元素转而成为操控数据。`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "组件基础",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `组件<br/><br/>

      将常用的功能与元素抽离<br/><br/>
      
      包装后就可以成为可以即用即取的组件<br/><br/>
      
      组件化是现代开发中十分重要的概念`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "插槽",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `给组件一点自由空间<br/><br/>

      插槽可以让一些相似性较高<br/><br/>
    
      但仍具有一定差异的组件有了便于实现的可能<br/><br/>
    
      可以大幅提高组件的复用性和程序的可维护性`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "Vue脚手架",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `Vue脚手架<br/><br/>

    本质上就是使用node进行文件的处理来实现工程化`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "Vue生态的学习",
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
     label: { color: theme, backgroundColor: bgc },children: children5,
  },
  { itemStyle: { color: theme }, name: "动态/异步组件" },
  { itemStyle: { color: theme }, name: "npm包管理器" },
  { itemStyle: { color: theme }, name: "vue-router" },
  { itemStyle: { color: theme }, name: "Vuex" },
];
const children3 = [
  {
    itemStyle: { color: theme },
    name: "寒假项目实战",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `项目实战<br/><br/>

      前期的学习已有一段时间<br/><br/>
    
      学习内容足以支持起同学们与其他方向同学共同完成简单的项目<br/><br/>
    
      同时是对过往学习的巩固与实践`,
    },
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
     label: { color: theme, backgroundColor: bgc },children: children4,
  },
];
const children2 = [
  {
    itemStyle: { color: theme },
    name: "JavaScript应用",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `JS应用<br/><br/>
        
        JavaScript的学习需要更多的练习<br/><br/>
        
        同时也能复习往期的学习`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "JavaScript面向对象",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `面向对象的思想<br/><br/>
        
        之前基础c语言的学习基于面向过程的程序设计思维<br/><br/>
        
        在这一节应当了解并尝试面向对象的程序设计`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "CSS动画与过渡",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `
      
      基于CSS3特性<br/><br/>
      
      在网页中可以呈现丰富的动态效果`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "响应式网页布局",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `
      
      为了适应不同尺寸的显示<br/><br/>
      
      例如手机，平板，与电脑<br/><br/>
      
      出现了能够与网页大小相适应而改变的布局`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "扩展知识",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `
      这一阶段学习会有一定难度<br/><br/>

      同时也会基于之前的学习进行扩展巩固<br/><br/>
    
      为实际的应用做准备`,
    },
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
     label: { color: theme, backgroundColor: bgc },children: children3,
  },
  {
    itemStyle: { color: theme },
    name: "网页的基本操作",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `
      
      学习原生 JavaScript 中内置的网络请求模块 XHR，<br/><br/>
      
      这部分要求了解 JavaScript 网络请求中的四个步骤`,
    },
  },
  {
    itemStyle: { color: theme },
    name: "网络请求库 axios",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `axios<br/><br/>

      在实际开发中，原生写法相对繁琐<br/><br/>

      更多的情况下是使用一些第三方库来进行网络请求的<br/><br/>
      
      其中最常用的就是 axios `,
    },
    link: "",
  },
  {
    itemStyle: { color: theme },
    name: "跨页面传递",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `在之前的学习中<br/><br/>

      数据的传递大多在同一个文件或者同一页面中完成<br/><br/>

      而实际开发中经常会需要在不同页面之间传递数据<br/><br/>
      
      为项目实战打下基础`,
    },
    link: "",
  },
];
const children1 = [
  {
    itemStyle: { color: theme },
    name: "HTML",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `HTML的用途<br/><br/>

        用于构造页面的总体结构<br/><br/>

        在页面放置各种元素(文字、图片、视频、添加表格等)`,
    },
    link: "",
  },
  {
    itemStyle: { color: theme },
    name: "CSS",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `CSS的作用<br/><br/>
        
        主要是用于页面的润色<br/><br/>
        
        及外观设置(文字颜色、文字类型、背景等)`,
    },
    link: "",
  },
  {
    collapsed: true,
    itemStyle: { color: theme },
    name: "基础学习",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `基础学习<br/><br/>
        
        这部分的知识并不难，但是知识比较零散，<br/><br/>
        
        所以希望大家注意区分一些比较相近的概念，<br/><br/>
        
        多去应用在网页之中就可以做到驾熟就轻。
        `,
    },
    symbol: "arrow",
    symbolRotate: -90,
    symbolSize: 14,
     label: { color: theme, backgroundColor: bgc },children: children2,
  },
  {
    itemStyle: { color: theme },
    name: "切图实战",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `实战练习<br/><br/>

        如何将设计稿转化为网页。<br/><br/>

        如何利用css与html准确地呈现想要的效果`,
    },
    link: "",
  },
  {
    itemStyle: { color: theme },
    name: "JavaScript 入门",
    tooltip: {
      show: true,
      textStyle: { color: theme },
      backgroundColor:bgc,backgroundColor:bgc,formatter: `JS基础学习<br/><br/>
        
        JavaScript是一门运行在浏览的编程语言<br/><br/>
        
        入门容易精通难<br/><br/>
        
        有很多与网页元素交互的原生API。`,
    },
  },
];
const root = {
  collapsed: true,
  itemStyle: { color: theme },
  name: "FullStack",
  symbol: "arrow",
  symbolRotate: -90,
  symbolSize: 14,
  label: { color: theme, backgroundColor: bgc },
  lineStyle: { color: theme },
  tooltip: {
    show: true,
    textStyle: { color: theme },
    backgroundColor:bgc,backgroundColor:bgc,formatter: `全栈开发（Full Stack），<br/><br/>

      全栈结合了前后端的知识既可以开发网页上的内容展示与用户交互。<br/><br/>
      
      也可以完成后端开发：开发数据访问服务，<br/><br/>
      
      使前端可以调用后端的服务对数据进行增、删、改、查。从而实现对前端的请求响应。<br/><br/>
      
      旨在培养掌握多种技能，胜任前端与后端，具有全局性思维的工程师`,
  },
   label: { color: theme, backgroundColor: bgc },children: children1,
};

export default root;
