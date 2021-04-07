// 把data中的数据 都使用Object.defineProperty 重新定义 es5
// Object.defineProperty不能兼容ie8及以下 vue2无法兼容ie8版本
import { isObject } from '../util/index'

class Observe {
  constructor(value) {
    console.log(value)
    // vue如果数据的层次过多，需要递归的去解析对象中的属性，一次增加和set和get方法
    if(Array.isArray(value)) {
      this.observerArray(value);
    }else {
      this.walk(value)
    }
  }
  walk(data) {
    let keys = Object.keys(data);
    keys.forEach((key) => {
      defineReactive(data, key, data[key]);
    })
  }
  observerArray(value){
    for( let i = 0; i< value.length; i++ ){
      observe(value[i])
    }
  }
}

function defineReactive(data, key, value) {
  observe(value)
  Object.defineProperty(data, key, {
    get(){ // 获取值得时候做一些操作
      return value
    },
    set(newValue){ // 也可以做一些操作
      if(newValue === value) return;
      observe(newValue) // 继续劫持用户设置的值，因为有可能用户设置的值是一个对象
      value = newValue;
    }
  })
}

export function observe(data) {
  let isObj = isObject(data)
  if (!isObj) { return }
  return new Observe(data)
}