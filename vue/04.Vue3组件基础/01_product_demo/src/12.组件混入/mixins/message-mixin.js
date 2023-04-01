export default {
  data(){
    return {
      message:'Good Money',
    }
  },
  created(){
    console.log('message: ' ,this.message,'混入成功');
  }
}