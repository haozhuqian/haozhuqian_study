function rp(p, x, t, f) {
  if (p === x) return f(new TypeError('Chaining cycle detected for promise!'));
  if (x instanceof Promise) return x.then(!x.status ? (v) => rp(p, v, t, f) : t, f);
  let used = false;
  let called = () => {
    if (used) return true;
    used = true;
    return false;
  };
  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      let then = x.then;
      if (typeof then === 'function') return then.call(x, (y) => called() ? undefined : rp(p, y, t, f), (r) => called() ? undefined : f(r));
      return t(x);
    } catch (e) { return called() ? undefined : f(e) }
  }
  t(x)
}

class Promise {
  status = 0;
  v;
  tbs = [];
  fbs = [];
  t = (v) => {
    if (v instanceof Promise) return v.then(this.t, this.f);
    queueMicrotask(() => {
      if (!this.status) {
        this.status = 1;
        this.v = v;
        this.tbs.forEach(f => queueMicrotask(() => f(v)))
      }
    });
  }
  f = (r) => queueMicrotask(() => {
    if (!this.status) {
      this.status = -1;
      this.v = r;
      this.fbs.forEach(f => queueMicrotask(() => f(r)))
    }
  })
  constructor(executor) {
    try {
      executor(this.t, this.f);
    } catch (r) {
      this.f(r);
    }
  }
  then(ont, onf) {
    let p;
    ont = typeof ont === 'function' ? ont : v => v;
    onf = typeof onf === 'function' ? onf : r => { throw r };
    return p = new Promise((t, f) => {
      const tb = () => { try { rp(p, ont(this.v), t, f) } catch (r) { f(r) } };
      const fb = () => { try { rp(p, onf(this.v), t, f) } catch (r) { f(r) } };
      if (this.status > 0) queueMicrotask(tb);
      else if (this.status < 0) queueMicrotask(fb);
      else {
        this.tbs.push(tb);
        this.fbs.push(fb);
      }
    });
  }

  catch(onf) {
    return this.then(null, onf);
  }

  static resolve(v) {
    return new Promise((t) => t(v));
  }
}

Promise.deferred = Promise.defer = function () {
  let dfd = {}
  dfd.promise = new Promise((t, f) => {
    dfd.resolve = t
    dfd.reject = f
  })
  return dfd
}

module.exports = Promise

Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4);
}).then((res) => {
  console.log(res)
})
console.log('a')
Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() => {
  console.log(6);
})
console.log('b')
