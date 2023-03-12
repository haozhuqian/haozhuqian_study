import CPU from "./CPU-road.js";
import OS from "./OS-road.js";
import style from "../style.js";

const theme = style.color.red[3];
const bgc = style.color.bgc;

const root = {
  collapsed: true,
  name: "CPU&OS",
  symbol: "arrow",
  symbolRotate:-90,
  symbolSize: 14,
  label: { color: theme,backgroundColor:bgc,},
  itemStyle: { color: theme,},
  lineStyle: { color: theme,},
  children: [CPU, OS],
};

export default root;
