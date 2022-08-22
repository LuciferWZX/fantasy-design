import React, {FC, useContext, useRef} from "react";
import {ConfigContext} from "../config-provider/ConfigContext";
import {tuple} from "../utils/type";
import {SizeType} from "../config-provider/SizeContext";
import classNames from "classnames";
import './style/index.less';
import {DisabledContext, SizeContext} from "../config-provider";
const ButtonTypes = tuple('default', 'primary','dashed','link', 'text');
export type ButtonType =typeof ButtonTypes[number]

// const ButtonHTMLTypes = tuple('submit','button','reset')
// export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

// export type AnchorButtonProps = {
//     href: string;
//     target?: string;
//     onClick?: React.MouseEventHandler<HTMLElement>;
// } & BaseButtonProps &
//     Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

// export type NativeButtonProps = {
//     htmlType?:ButtonHTMLType
//     onClick:React.MouseEventHandler<HTMLElement>
// } & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type'|'onClick'>

// export interface BaseButtonProps{
export interface ButtonProps{
    /**
     * @description         button type
     * @description.zh-CN   按钮类型
     */
    type?:ButtonType
    disabled?:boolean
    icon?:React.ReactNode
    size?:SizeType
    prefixCls?: string
    style?:React.CSSProperties
    block?: boolean
    danger?:boolean
    ghost?:boolean
    className?:string
    href?:string
    onClick?:any
    children?: React.ReactNode;
}

// export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

function isUnBorderedButtonType(type?:ButtonType){
    return type === 'text' || type === "link"
}
function isLinkButtonType(type?:ButtonType){
    return type === 'link'
}

const InternalButton:React.ForwardRefRenderFunction<unknown,ButtonProps>= (props,ref) => {
    const {
        type,
        prefixCls:customizePrefixCls,
        size,
        disabled,
        block,
        href,
        ghost,
        danger,
        className,
        style,
        children
    }=props
    const buttonRef =(ref as any)|| React.createRef<HTMLElement>()

    //----------context-------------
    const {getPrefixCls} = useContext(ConfigContext)
    const customSize = useContext(SizeContext)
    const customDisabled = useContext(DisabledContext)
    console.log(111,customSize)
    console.log(222,customDisabled)
    //------------------------------
    const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined };
    const sizeFullName =  size||customSize;
    const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || '' : '';
    console.log(999,sizeCls)
    const prefixCls = getPrefixCls('btn',customizePrefixCls)
    const classes = classNames(
        prefixCls,
        {
            [`${prefixCls}-${type}`]:type,
            [`${prefixCls}-block`]:block,
            [`${prefixCls}-background-ghost`]:ghost && !isUnBorderedButtonType(type),
            [`${prefixCls}-dangerous`]:!!danger,
            [`${prefixCls}-disabled`]:disabled && href!==undefined
        },
        className
    )
    const handleClick=(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>)=>{
        const { onClick } = props;
        if (disabled) {
            e.preventDefault();
            return;
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    }
    if (isLinkButtonType(type)){
        return (
            <a
                className={classes}
                style={style}
                href={href}
                onClick={handleClick}
                ref={buttonRef}>
                {children}
            </a>
        )
    }
    const buttonNode = (
        <button
            onClick={handleClick}
            disabled={disabled}
            className={classes}
            style={style}
            ref={buttonRef}>
            {children}
        </button>
    )

    return buttonNode
}
const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);
export default Button