const fs = require("fs");

// fs.readdir(
//   "./Money",
//   {
//     withFileTypes: true,
//   },
//   (err, files) => {
//     console.log(files);
//     files.forEach((item) => {
//       console.log(item);
//       if (item.isDirectory()) {
//         console.log("这是一个文件夹");
//       } else {
//         console.log("这是一个文件");
//       }
//     });
//   }
// );
// 返回一个数组
// 类型2代表是文件夹
// 类型1代表是文件

//递归读取
function deepRead(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      console.log(path);
      files.forEach((item) => {
        console.log(path + '/' + item.name);
        if (item.isDirectory()) {
          deepRead(path + '/' + item.name);
        }
      });
    }
  });
}
deepRead("./Money");
