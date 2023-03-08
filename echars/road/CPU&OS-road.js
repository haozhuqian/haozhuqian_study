import CPU from "./CPU-road.js";
import OS from "./OS-road.js";

const root = {
  collapsed: true,
  name: "CPU&OS",
  tooltip: {
    formatter: "介绍<br/>另一行介绍<br/>可以有很多行，大小与最大行宽适应",
  },
  children: [CPU, OS],
};

export default root;
