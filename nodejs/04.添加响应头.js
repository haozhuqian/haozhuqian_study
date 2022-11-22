const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  const url = req.url;
  const mothod = req.mothod;
  let content = '<h1>404 Not Found</h1>';
  if (url === "/" || url === "/index.html") {
    content = '<h1>首页</h1>';
  }else if (url === "/about.html") {
    content = '<h1>关于</h1>';
  }
  const str = `请求URL地址是 ${url}请求的类型为${req.method}`;
  console.log(str);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(content);
});
server.listen(8080, () => {
  console.log("Server run at http://127.0.0.1:8080");
});
