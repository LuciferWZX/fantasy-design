export interface HelloFantasyType{

}
/**
 * @description 用来测试是否正确使用 fantasy-utils
 * @deprecated
 * @param name
 */
const helloFantasy = (name?:string):void => {
    console.log(`hello ${name ?? 'Fantasy design'}`)
}
export default helloFantasy