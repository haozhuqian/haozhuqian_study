class P{
  constructor(newFn){
    this.status = 'pending';
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = (value)=>{
      if(this.status === 'pending'){
        this.status = 'resolved';
        this.onResolvedCallbacks.reduce((arg,fn)=>{
          if(arg instanceof P){
            return arg.then(fn);
          }else{
            return fn(arg);
          }
        },value);
      }
    }
    let reject = (reason)=>{
      if(this.status === 'pending'){
        this.status = 'rejected';
        this.onRejectedCallbacks.forEach(fn=>fn(reason));
      }
    }
    try{
      newFn(resolve,reject);
    }catch(e){
      reject(e);
    }
  }
  then(onFulfilled,onRejected){
    if(this.status === 'resolved'){
      onFulfilled?.();
    }
    if(this.status === 'rejected'){
      onRejected?.();
    }
    if(this.status === 'pending'){
      this.onResolvedCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
    return this;
  }
  catch(onRejected){
    if(this.status === 'rejected'){
      onRejected?.();
    }
    if(this.status === 'pending'){
      this.onRejectedCallbacks.push(onRejected);
    }
    return this;
  }
  finally(onFinally){
    if(this.status === 'pending'){
      this.onResolvedCallbacks.push(onFinally);
      this.onRejectedCallbacks.push(onFinally);
    }else{
      onFinally?.();
    }
    return this;
  }
}