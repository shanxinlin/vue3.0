
/**
 * 
 * @param {*} data 当前数据是不是数据对象
 */
export function isObject(data) {
  return typeof data === 'object' && data !== null
}