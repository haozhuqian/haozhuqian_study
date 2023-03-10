import AI from "./road/AI-road.js";
import Java from "./road/Java-road.js";
import FullStack from "./road/FullStack-road.js";
import CPUOS from "./road/CPU&OS-road.js";
import style from "./style.js";

const root = {
  name: "云顶书院开发方向",
  animationDurationUpdate: 0,
  tooltip: {
    backgroundColor: style.color.orange[4],
    borderColor: style.color.orange[3],
    borderWidth: 2,
    padding: 5,
    formatter: "{b}",
  },
  children: [AI, Java, FullStack, CPUOS],
};
export default root;
