import AI from "./AI-road.js";
import Java from "./Java-road.js";
import FullStack from "./FullStack-road.js";
import CPUOS from "./CPU&OS-road.js";

const root={
    name: '云顶书院开发方向',
    lable: "",
    animationDurationUpdate: 0,
    tooltip: {
      formatter: '介绍<br/>另一行介绍<br/>可以有很多行，大小与最大行宽适应'
    },
    itemStyle: {},
    children: [AI, Java, FullStack, CPUOS],
};
export default root