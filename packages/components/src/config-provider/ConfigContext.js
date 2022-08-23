import * as React from "react";
import { SizeContextProvider } from "./SizeContext";
import { DisabledContextProvider } from "./DisabledContext";
//获取的前缀
const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
    return suffixCls ? `${customizePrefixCls !== null && customizePrefixCls !== void 0 ? customizePrefixCls : 'fantasy'}-${suffixCls}` : 'fantasy';
};
export const ConfigContext = React.createContext({
    prefixCls: 'fantasy',
    getPrefixCls: defaultGetPrefixCls
});
export const ConfigProvider = ({ children, config }) => {
    const renderChildren = () => {
        let childNode = children;
        if (config === null || config === void 0 ? void 0 : config.size) {
            childNode = (React.createElement(SizeContextProvider, { size: config.size }, childNode));
        }
        if ((config === null || config === void 0 ? void 0 : config.disabled) !== undefined) {
            childNode = (React.createElement(DisabledContextProvider, { disabled: config.disabled }, childNode));
        }
        return childNode;
    };
    return (React.createElement(ConfigContext.Consumer, null, originConfig => {
        if (config) {
            config.getPrefixCls = defaultGetPrefixCls;
        }
        return (React.createElement(ConfigContext.Provider, { value: config || originConfig }, renderChildren()));
    }));
};
export default ConfigProvider;
