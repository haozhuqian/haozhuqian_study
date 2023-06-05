const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/login") {
    if (request.method === "POST") {
      response.end("login success");
    } else {
      response.end("login failure");
    }
  } else if (request.url === "/about") {
    response.end("some thing about GoodMoney");
  } else {
    response.end("Hi,GoodMoney");
  }
});

server.listen(8080, () => {
  console.log("服务器启动");
});
