import * as React from "react";

//ConfigProvider的config的类型
export type ConfigType = {
    prefixCls?:string|undefined
    getPrefixCls:(suffixCls?: string, customizePrefixCls?: string) => string
}|undefined
//获取的前缀
const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
    return suffixCls ? `${customizePrefixCls ?? 'fantasy'}-${suffixCls}` : 'fantasy';
};
export const ConfigContext = React.createContext<ConfigType>({
    prefixCls:'fantasy',
    getPrefixCls:defaultGetPrefixCls
})

export interface ConfigContextProps{
    config?:ConfigType
    children?:React.ReactNode
}
export const ConfigProvider:React.FC<ConfigContextProps>=({children,config})=>(
    <ConfigContext.Consumer>
        {originConfig=>{
            if(config){
                config.getPrefixCls = defaultGetPrefixCls
            }
            return(
                <ConfigContext.Provider value={config|| originConfig}>
                    {children}
                </ConfigContext.Provider>
            )
        }}
    </ConfigContext.Consumer>
)
export default ConfigProvider