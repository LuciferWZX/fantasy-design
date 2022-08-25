import * as React from "react";
import {SizeContextProvider, SizeType} from "./SizeContext";
import {DisabledContextProvider, DisabledType} from "./DisabledContext";

//ConfigProvider的config的类型
export type ConfigType = {
    prefixCls?:string|undefined
    getPrefixCls?:(suffixCls?: string, customizePrefixCls?: string) => string
    size?:SizeType
    disabled?:DisabledType

}
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
export const ConfigProvider:React.FC<ConfigContextProps>=({children,config})=>{
    const renderChildren=():React.ReactNode=>{
        let childNode = children
        if(config?.size){
            childNode = (
                <SizeContextProvider size={config.size}>
                    {childNode}
                </SizeContextProvider>
            )
        }
        if(config?.disabled!==undefined){
            childNode = (
                <DisabledContextProvider disabled={config.disabled}>
                    {childNode}
                </DisabledContextProvider>
            )
        }
        return childNode
    }
    return(
        <ConfigContext.Consumer>
            {originConfig=>{
                if(config){
                    config.getPrefixCls = defaultGetPrefixCls
                }
                return(
                    <ConfigContext.Provider value={config|| originConfig}>
                        {renderChildren()}
                    </ConfigContext.Provider>
                )
            }}
        </ConfigContext.Consumer>
    )
}
export default ConfigProvider