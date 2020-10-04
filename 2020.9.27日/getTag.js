/**
 * @name: 获取参数的类型 
 * @param {*} value The value to query 
 * @return {string} Returns the `toStringTag` 
 */
function getTag(value){
    // value可能值是undefined null两种，在进行比较
    if(value==null){
        return value === undefined?'[object Undefined]':'[object Null]'
    }
    return Object.prototype.toString.call(value);
}
console.log(Symbol.isConcatSpreadable);
