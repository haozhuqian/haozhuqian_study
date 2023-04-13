
// 创建不同示例，拥有不同的配置
const axios1 = axios.create({
  baseURL: "http://47.93.18.12:4000",
  timeout: 2000,
});
// 请求拦截
axios1.interceptors.request.use(
  (config) => {
    console.log("成功则回调这个,可以对配置进行修改");
    return config;
  },
  (err) => {
    "失败回调这个";
    return err;
  }
);

// 响应拦截
axios1.interceptors.response.use(
  (res) => {
    console.log("成功响应");
    return res;
  },
  (err) => {
    "失败的回调";
    return err;
  }
);
const axios2 = axios.create({});

axios1.get("/search/multimatch?keywords=海阔天空").then((res) => {
  console.log("get1:", res);
});
