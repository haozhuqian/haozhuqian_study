const http = require("http");

const server = http.createServer((request, response) => {
  request.setEncoding("utf8");
  let islogin = false;
  request.on("data", (data) => {
    data = JSON.parse(data);
    if (data.name === "GoodMoney" && data.password === "123456") {
      islogin = true;
    } else {
      islogin = false;
    }
  });
  request.on("end", () => {
    if(islogin){
      response.end("Hi,GoodMoney,you have logged in successfully");
    }else{
      response.end("Your password is incorrect");
    }
  });
});

server.listen(8080, () => {
  console.log("服务器启动");
});
