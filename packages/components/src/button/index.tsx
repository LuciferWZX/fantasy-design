import React, {ButtonHTMLAttributes, FC, useContext} from "react";
import {ConfigContext} from "../config-provider/ConfigContext";
import classnames from 'classnames'
import {tuple} from "../utils/type";
import './index.css'
import {SizeType} from "../config-provider/SizeContext";

const ButtonTypes = tuple('default', 'primary','dashed','link', 'text');
export type ButtonType =typeof ButtonTypes[number]

const ButtonHTMLTypes = tuple('submit','button','reset')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

export type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
    htmlType?:ButtonHTMLType
    onClick:React.MouseEventHandler<HTMLElement>
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type'|'onClick'>

export interface BaseButtonProps{
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

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

const InternalButton:React.ForwardRefRenderFunction<unknown,ButtonProps>=(props, ref)=>{
    const {
        disabled:customDisabled,
        prefixCls:customizePrefixCls,
        danger,
        size:customizeSize
    }=props
    return(
        <div>xxx</div>
    )
}

const Button:FC<BaseButtonProps> = (props) => {
    const config = useContext(ConfigContext)
    console.log(222,config,config?.getPrefixCls('btn',config.prefixCls))
    return(
        <div> 按钮</div>
    )
}
export default Button