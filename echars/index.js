import data from "./data.js";
import style from "./style.js";

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
      left: "12%",
      top: "12%",
      right: "12%",
      bottom: "12%",
      type: "tree",
      id: 0,
      name: "tree",
      data: [data],
      symbolSize: 15,
      edgeShape: "polyline",
      edgeForkPosition: "63%",
      initialTreeDepth: 3,
      roam: true,
      tooltip: {
        textStyle: {
          color: style.color.orange[3],
          fontStyle: "normal",
          fontWeight: "normal",
          fontFamily: "sans-serif",
          fontSize: 14,
          lineHeight: 14,
          ellipsis: "...",
        },
        backgroundColor: style.color.orange[4],
        borderColor: style.color.orange[3],
        borderWidth: 2,
        padding: 5,
        formatter: "{b}",
      },
      lineStyle: {
        color: style.color.orange[3],
        width: 1.5,
        curveness: 0.5,
        shadowBlur: 2,
        shadowColor: style.color.orange[2],
        shadowOffsetX: -2,
        shadowOffsetY: 2,
      },
      itemStyle: {
        color: style.color.orange[3],
        borderColor: style.color.orange[3],
        borderWidth: 2,
        borderType: "solid",
        borderDashOffset: 0,
        borderCap: "round",
        borderJoin: "rpund",
        borderMiterLimit: 10,
        shadowBlur: 3,
        shadowColor: style.color.orange[2],
        shadowOffsetX: 2,
        shadowOffsetY: 1,
        opacity: 1,
      },
      label: {
        show: true,
        position: "top",
        distance: 8,
        color: style.color.orange[3],
        fontStyle: "normal",
        fontWeight: "900",
        fontFamily: "sans-serif",
        fontSize: 15,
        align: "center",
        verticalAlign: "middle",
        lineHeight: 10,
        backgroundColor: style.color.orange[4],
        textBorderColor: style.color.orange[3],
        textBorderWidth: 0,
        textBorderType: "solid",
      },
      labelLayout: {
        moveOverlap: "shiftX",
      },
      leaves: {
        label: {
          position: "right",

          distance: 3,
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
