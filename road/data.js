import AI from "./road/AI-road.js";
import Java from "./road/Java-road.js";
import FullStack from "./road/FullStack-road.js";
import CPUOS from "./road/CPU-OS-road.js";
import style from "./style.js";

const theme = style.color.yellow[1];
const bgc = style.color.bgc;

const root = {
  name: "云顶书院开发方向",
  itemStyle: { color: theme,},
  lineStyle: { color: theme,},
  label: { color: theme,backgroundColor:bgc,},
  tooltip:{textStyle:{color: theme}},
  children: [AI, Java, FullStack, CPUOS],
};
export default root;
