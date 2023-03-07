import data from "./data.js";

// 基于准备好的dom，初始化echarts实例
const myChart = echarts.init(document.getElementById("main"));
// window.onresize = myChart.resize;
myChart.on("click", function (params) {
  if (!params.data.children && params.data.link) {
    window.open(params.data.link);
  }
});
// 指定图表的配置项和数据
const option = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },
  series: [
    {  
      left: '12%' ,
      top: '12%' ,
      right: '12%' ,
      bottom: '12%' ,
      type: "tree",
      id: 0,
      name: "tree",
      data: [data],
      symbolSize: 7,
      edgeShape: "polyline",
      edgeForkPosition: "63%",
      initialTreeDepth: 3,
      roam: true,
      lineStyle: {
        color: "rgb(222,120,27)",
        width: 1.5,
        curveness: 0.5,
        shadowBlur: 2,
        shadowColor: "rgba(222,120,27,0.5)",
        shadowOffsetX: -2,
        shadowOffsetY: 2,
      },
      itemStyle: {
        color: "rgb(222,120,27)",
        borderColor: "rgb(222,120,27)",
        borderWidth: 1.5,
        borderType: "solid",
        borderDashOffset: 0,
        borderCap: "round",
        borderJoin: "rpund",
        borderMiterLimit: 10,
        shadowBlur: 3,
        shadowColor: "rgba(222,120,27,0.5)",
        shadowOffsetX: 2,
        shadowOffsetY: 1,
        opacity: 1,
      },
      label: {
        show: true,
        position: "top",
        distance: 5,
        color: "rgb(222,120,27)",
        fontStyle: "normal",
        fontWeight: "900",
        fontFamily: "sans-serif",
        fontSize: 12,
        align: "center",
        verticalAlign: "middle",
        lineHeight: 20,
        backgroundColor: "rgba(255,255,255,0)",
        textBorderColor: "rgb(222,120,27)",
        textBorderWidth: 0,
        textBorderType: "solid",
      },
      labelLayout: {
        moveOverlap: "shiftX",
      },
      leaves: {
        label: {
          position: "right",
          verticalAlign: "middle",
          align: "left",
        },
      },
      emphasis: {
        focus: "ancestor",
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750,
    },
  ],
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
