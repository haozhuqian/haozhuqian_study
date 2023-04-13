import axios from "axios";

class GMRequest{
  request(config){
    return new Promise((resolve,reject) => {
      axios.request(config).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err);
      })
    })
  }
}

export default new GMRequest();