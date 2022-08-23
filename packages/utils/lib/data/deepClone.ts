/**
 * map对key的释放不是很友好，key是强引用，GC垃圾回收不会释放，
 * 所以改造成weakmap
 */
//全局变量用来处理循环自身
let fantasyDeepClone: { cached:WeakMap<any, any> }
export default function deepClone(data:any):any{
    if (typeof data !== "object" || data === null){
        return data
    }
    // 缓存用来处理循环自身的问题
    if(!fantasyDeepClone.cached){
        fantasyDeepClone.cached = new WeakMap()
    }
    //缓存是否已经处理过这个数据
    if(fantasyDeepClone.cached.has(data)){
        //处理过就直接返回不做处理了
        return deepClone(fantasyDeepClone.cached.get(data))
    }
    //Map类型
    if(data instanceof Map){
        let temp = new Map()
        for (let [key,val] of data){
            temp.set(deepClone(key),deepClone(val))
        }
        fantasyDeepClone.cached.set(data,temp)
        return temp
    }
    //Set类型
    if(data instanceof Set){
        let temp = new Set()
        for (let val of data){
            temp.add(deepClone(val))
        }
        fantasyDeepClone.cached.set(data,temp)
        return temp
    }
    //RegExp类型
    if(data instanceof RegExp){
        let temp = new RegExp(data)
        fantasyDeepClone.cached.set(data,temp)
        return temp
    }
    //Array类型和Object类型
    let temp = new data.constructor()
    for (let key in data){
        temp[key] = deepClone(data[key])
    }
    fantasyDeepClone.cached.set(data,temp)
    return temp
}