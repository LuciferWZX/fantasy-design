import React, {ButtonHTMLAttributes, FC, useContext} from "react";
import {ConfigContext} from "../config-provider/ConfigContext";
import {tuple} from "../utils/type";
import {SizeType} from "../config-provider/SizeContext";
import classNames from "classnames";
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
    block?: boolean
    danger?:boolean
    className?:string
    children?: React.ReactNode;
}

// export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

function isUnBorderedButtonType(type?:ButtonType){
    return type === 'text' || type === "link"
}

const Button:FC<ButtonProps> = (props) => {
    const {
        type,
        prefixCls:customizePrefixCls,
        className,
        children
    }=props
    const {getPrefixCls} = useContext(ConfigContext)
    const prefixCls = getPrefixCls('btn',customizePrefixCls)
    console.log(222,prefixCls)
    const classes = classNames(
        prefixCls,
        {
            [`${prefixCls}-${type}`]:type
        },
        className
    )
    const buttonNode = (
        <button
            className={classes}>
            {children}
        </button>
    )
    if(!isUnBorderedButtonType(type)){
        return buttonNode
    }
    return(
        <div> 按钮</div>
    )
}
export default Button