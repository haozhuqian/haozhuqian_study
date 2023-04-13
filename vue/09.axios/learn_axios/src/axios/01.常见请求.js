import axios from "axios";

axios.defaults.baseURL = "http://47.93.18.12:4000";

// 发送request请求
axios
  .request({
    url: "http://123.207.32.32:8000/home/multidata",
    method: "GET",
  })
  .then((res) => {
    console.log("res:", res.data);
  });

axios
  .get("http://47.93.18.12:4000/search/multimatch?keywords=海阔天空")
  .then((res) => {
    console.log("get1:", res.data);
  });

axios
  .get("/search/multimatch", {
    params: {
      keywords: "haiktk",
    },
  })
  .then((res) => {
    console.log("get2:", res.data);
  });

// 以下仅作示例，实际并不能访问
axios
  .post("http://47.93.18.12:4000/search/multimatch", {
    data: {
      keywords: "haiktk",
    },
  })
  .then((res) => {
    console.log("post:", res.data);
  });

axios
  .all([
    axios.get("/search/multimatch", {
      params: {
        keywords: "haiktk",
      },
    }),
    axios.get("http://47.93.18.12:4000/search/multimatch?keywords=海阔天空"),
  ])
  .then((res) => {
    console.log("all:", res);
  });
