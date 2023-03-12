import data from "./data.js";
import style from "./style.js";

const theme = style.color.orange[2];
const bgc = style.color.bgc;

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
    show:false,
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
      symbol: "circle",
      symbolSize: 10,
      symbolOffset: [5, 0] ,
      edgeShape: "polyline",
      edgeForkPosition: "63%",
      initialTreeDepth: 3,
      roam: true,
      tooltip: {
        textStyle: {
          color: style.color.orange[2],
          fontSize: 14,
          lineHeight: 14,
          fontWeight: "700",
        },
        borderWidth: 2,
        padding: 5,
        formatter: "{b}",
        extraCssText: "box-shadow: none",
      },
      lineStyle: {
        color: "inherit",
        width: 3,
      },
      itemStyle: {
        color: "inherit",
      },
      label: {
        padding:3,
        show: true,
        position: "right",
        distance: 0,
        verticalAlign: "middle",
        align: "left",
        color: "inherit",
        fontStyle: "normal",
        fontWeight: "700",
        fontFamily: "sans-serif",
        fontSize: 15,
        height: 20,
        textBorderColor: style.color.orange[2],
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
        disabled: true,
        focus: "none",
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750,
    },
  ],
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
