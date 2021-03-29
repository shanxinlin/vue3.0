import { observe } from './observe/index.js'
export function initState(vm) {
  const opts = vm.$options;
  // vue的数据来源 属性 方法 数据 计算属性 watch
  if (opts.props) {
    initProps(vm)
  }
  if (opts.methods) {
    initMethods(vm)
  }
  if (opts.data) {
    initData(vm)
  }
  if (opts.computed) {
    initComputed(vm)
  }
  if (opts.watch) {
    initWatch(vm)
  }
}

function initProps() { }
function initMethods() { }
function initData(vm) {
  // 数据初始化工作
  let data = vm.$options.data; // 用户传递的data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data
  // 对象数据劫持 用户改变了数据 我希望可以得到通知 =》 刷新页面
  // 这就是 MVVM 模式 数据变化可以驱动试图变化
  // Object.definedProperty() 给属性增加get方法和set方法
  observe(data)
}
function initComputed() { }
function initWatch() { }