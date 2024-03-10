const optionHandler = {
  get(target, key) {
    return target.data?.[key] || target.methods?.[key] || target[key]
  },
  set(target, key, value) {
    if (!target.data) target.data = {[key]: value}
    else target.data[key] = value
  }
}

const newVue = (option) => {
  const res = new Proxy(option, optionHandler);
  if (option.methods) {
    for (const method in option.methods) {
      if (typeof option.methods[method] !== "function") {
        throw new Error('methods must be function')
      }
      option.methods[method] = option.methods[method].bind(res);
    }
    option.data = option.data?.call(res) || {};
  }
  return res
}

const nv = newVue({
  data() {
    return {
      name: '名字',
      fnName: this.getfnName(),
      methodName: this.getName()
    }
  },
  methods: {
    getName() {
      return this.name
    },
    getfnName() {
      return '函数获取的名字'
    }
  }
})

console.log(nv)
console.log(nv.name)
console.log(nv.fnName)
console.log(nv.methodName)
console.log(nv.getName())
console.log(nv.getfnName())