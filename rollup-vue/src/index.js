// vue核心代码 Vue的一个声名
import {initMixin} from './init'
function Vue(options) {
  // 进行vue的初始化
  this._init(options)
}
initMixin(Vue)

export default Vue