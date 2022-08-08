//将元祖类转为字符串的联合类型
export const tuple = <T extends string[]>(...args:T)=>args