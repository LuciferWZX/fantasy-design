import * as React from "react";
import { SizeType } from "./SizeContext";
import { DisabledType } from "./DisabledContext";
export declare type ConfigType = {
    prefixCls?: string | undefined;
    getPrefixCls?: (suffixCls?: string, customizePrefixCls?: string) => string;
    size?: SizeType;
    disabled?: DisabledType;
};
export declare const ConfigContext: React.Context<ConfigType>;
export interface ConfigContextProps {
    config?: ConfigType;
    children?: React.ReactNode;
}
export declare const ConfigProvider: React.FC<ConfigContextProps>;
export default ConfigProvider;
