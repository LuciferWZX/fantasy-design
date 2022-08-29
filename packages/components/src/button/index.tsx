import React, {useContext} from "react";
import {ConfigContext} from "../config-provider/ConfigContext";
import {tuple} from "../utils/type";
import {SizeType} from "../config-provider/SizeContext";
import classNames from "classnames";
import {DisabledContext, SizeContext} from "../config-provider";
import {LoadingIcon} from "@fantasy-design/icons";
import './style/index.less';
const ButtonTypes = tuple('default', 'primary','dashed','link', 'text');
export type ButtonType =typeof ButtonTypes[number]

const ButtonShapes = tuple('default', 'circle', 'round');
export type ButtonShape = typeof ButtonShapes[number];
type Loading = number | boolean;

export interface ButtonProps{
    type?:ButtonType
    disabled?:boolean
    size?:SizeType
    prefixCls?: string
    style?:React.CSSProperties
    block?: boolean
    danger?:boolean
    ghost?:boolean
    icon?: React.ReactNode;
    loading?: boolean | { delay?: number };
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
        loading,
        size,
        disabled:customDisabled,
        block,
        href,
        icon,
        ghost,
        danger,
        className,
        style,
        children
    }=props
    const buttonRef =(ref as any)|| React.createRef<HTMLElement>()
    const [innerLoading, setLoading] = React.useState<Loading>(!!loading);
    const iconType = innerLoading?'loading':icon
    //----------context-------------
    const {getPrefixCls,prefixCls:configPrefixCls} = useContext(ConfigContext)
    const customSize = useContext(SizeContext)
    const disabled = useContext(DisabledContext)
    const mergedDisabled = disabled && customDisabled
    //-----------size-------------------
    const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined };
    const sizeFullName =  size||customSize;
    const sizeCls = sizeFullName ? sizeClassNameMap[sizeFullName] || '' : '';
    //-----------update loading--------
    const loadingOrDelay:Loading =
        typeof loading === "object" && loading.delay ? loading.delay || true :!!loading
    React.useEffect(()=>{
        let delayTimer:number|null = null
        if(typeof loadingOrDelay === "number"){
            delayTimer = window.setTimeout(()=>{
                delayTimer = null
                setLoading(loadingOrDelay)
            },loadingOrDelay)
        }else{
            setLoading(loadingOrDelay)
        }
        return ()=>{
            if(delayTimer){
                window.clearTimeout(delayTimer)
                delayTimer = null
            }
        }
    },[loadingOrDelay])


    const prefixCls = getPrefixCls('btn',customizePrefixCls || configPrefixCls)
    const classes = classNames(
        prefixCls,
        {
            [`${prefixCls}-${shape}`]:shape!=='default' && shape,
            [`${prefixCls}-${type}`]:type,
            [`${prefixCls}-${sizeCls}`]:sizeCls,
            [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
            [`${prefixCls}-block`]:block,
            [`${prefixCls}-background-ghost`]:ghost && !isUnBorderedButtonType(type),
            [`${prefixCls}-dangerous`]:!!danger,
            [`${prefixCls}-disabled`]:mergedDisabled && href!==undefined
        },
        className
    )

    const handleClick=(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>)=>{
        const { onClick } = props;
        if (innerLoading||disabled) {
            e.preventDefault();
            return;
        }
        (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
    }
    const iconNode = innerLoading?(
            <LoadingIcon
                loading={!!innerLoading}
            />
        ):icon?icon:undefined

    if (isLinkButtonType(type)){
        return (
            <a
                className={classes}
                style={style}
                href={href}
                onClick={handleClick}
                ref={buttonRef}>
                {iconNode}
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
            {iconNode}
            {children}
        </button>
    )
    return buttonNode
}
const Button = React.forwardRef<unknown, ButtonProps>(InternalButton);
export default Button