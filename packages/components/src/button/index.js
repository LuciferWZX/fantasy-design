import React, { useContext } from "react";
import { ConfigContext } from "../config-provider/ConfigContext";
import { tuple } from "../utils/type";
import classNames from "classnames";
import './style/index.less';
import { DisabledContext, SizeContext } from "../config-provider";
const ButtonTypes = tuple('default', 'primary', 'dashed', 'link', 'text');
const ButtonShapes = tuple('default', 'circle', 'round');
// export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>
function isUnBorderedButtonType(type) {
    return type === 'text' || type === "link";
}
function isLinkButtonType(type) {
    return type === 'link';
}
const InternalButton = (props, ref) => {
    const { type = 'default', shape = 'default', prefixCls: customizePrefixCls, size, disabled: customDisabled, block, href, ghost, danger, className, style, children } = props;
    const buttonRef = ref || React.createRef();
    //----------context-------------
    const { getPrefixCls, prefixCls: configPrefixCls } = useContext(ConfigContext);
    const customSize = useContext(SizeContext);
    const disabled = useContext(DisabledContext);
    const mergedDisabled = disabled && customDisabled;
    //-----------size-------------------
    const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined };
    const sizeFullName = size || customSize;
    const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || '' : '';
    const prefixCls = getPrefixCls('btn', customizePrefixCls || configPrefixCls);
    console.log(1111, configPrefixCls);
    const classes = classNames(prefixCls, {
        [`${prefixCls}-${shape}`]: shape !== 'default' && shape,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-background-ghost`]: ghost && !isUnBorderedButtonType(type),
        [`${prefixCls}-dangerous`]: !!danger,
        [`${prefixCls}-disabled`]: mergedDisabled && href !== undefined
    }, className);
    const handleClick = (e) => {
        const { onClick } = props;
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    if (isLinkButtonType(type)) {
        return (React.createElement("a", { className: classes, style: style, href: href, onClick: handleClick, ref: buttonRef }, children));
    }
    const buttonNode = (React.createElement("button", { onClick: handleClick, disabled: disabled, className: classes, style: style, ref: buttonRef }, children));
    return buttonNode;
};
const Button = React.forwardRef(InternalButton);
export default Button;
