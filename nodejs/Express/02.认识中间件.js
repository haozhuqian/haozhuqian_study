const express = require("express");

//创建express服务器
const app = express();

//注册简单的中间件，无筛选条件，无论什么请求都可以匹配
app.use((req, res, next) => {
  console.log("响应了请求");
});

//只匹配路径的中间件，请求方式不做限制
app.use("/home", (req, res, next) => {
  res.end("home data");
});

//路径与方法都进行匹配的中间件
app.post("/login", (req, res, next) => {
  res.end("post login");
});

//一次注册多个中间件,有next则依次执行
app.post(
  "/user",
  (req, res, next) => {
    console.log("get user");
    next();
  },
  (req, res, next) => {
    console.log("get user");
    next();
  },
  (req, res, next) => {
    console.log("get user");
    next();
  }
);

//启动服务器，监听端口
app.listen(9000, () => {
  console.log("express服务器启动");
});
