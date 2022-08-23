import React, {FC, useContext} from "react";
import {ConfigContext} from "../config-provider/ConfigContext";
import {tuple} from "../utils/type";
import {SizeType} from "../config-provider/SizeContext";
import classNames from "classnames";
import './style/index.less';
import {DisabledContext, SizeContext} from "../config-provider";
const ButtonTypes = tuple('default', 'primary','dashed','link', 'text');
export type ButtonType =typeof ButtonTypes[number]

const ButtonShapes = tuple('default', 'circle', 'round');
export type ButtonShape = typeof ButtonShapes[number];

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
    type?:ButtonType
    disabled?:boolean
    size?:SizeType
    prefixCls?: string
    style?:React.CSSProperties
    block?: boolean
    danger?:boolean
    ghost?:boolean
    className?:string
    shape?: ButtonShape;
    href?:string
    onClick?: React.MouseEventHandler<HTMLElement>;
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
        type='default',
        shape='default',
        prefixCls:customizePrefixCls,
        size,
        disabled:customDisabled,
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
    const {getPrefixCls,prefixCls:configPrefixCls} = useContext(ConfigContext)
    const customSize = useContext(SizeContext)
    const disabled = useContext(DisabledContext)
    const mergedDisabled = disabled && customDisabled
    //-----------size-------------------
    const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined };
    const sizeFullName =  size||customSize;
    const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || '' : '';

    const prefixCls = getPrefixCls('btn',customizePrefixCls || configPrefixCls)
    console.log(1111,configPrefixCls)
    const classes = classNames(
        prefixCls,
        {
            [`${prefixCls}-${shape}`]:shape!=='default' && shape,
            [`${prefixCls}-${type}`]:type,
            [`${prefixCls}-${sizeCls}`]:sizeCls,
            [`${prefixCls}-block`]:block,
            [`${prefixCls}-background-ghost`]:ghost && !isUnBorderedButtonType(type),
            [`${prefixCls}-dangerous`]:!!danger,
            [`${prefixCls}-disabled`]:mergedDisabled && href!==undefined
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
const Button:FC<ButtonProps> = React.forwardRef<unknown, ButtonProps>(InternalButton);
export default Button