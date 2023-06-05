const fs = require("fs");
// 同步读取方式
const res = fs.readFileSync("./try.txt", {
  encoding: "utf8",
});
console.log(res);
console.log("the code after sync readed the try.txt");

// 异步读取方式
fs.readFile(
  "./try.txt",
  {
    encoding: "utf8",
  },
  (err, data) => {
    if (err) {
      console.log("have error when trying to read,err:", err);
      return;
    }
    console.log("succes to read the try.txt,data:", data);
  }
);
console.log("the code after read the try.txt");

//异步promise读取
fs.promises
  .readFile("./try.txt", { encoding: "utf8" })
  .then((res) => {
    console.log("success to read the try.txt by promise,data:", res);
  })
  .catch((err) => {
    console.log("have error when trying to read by promise,err:", err);
  });
console.log("the code after read the try.txt by promise");
