import React from "react";
import {FC} from "react";
import '../source/icon-source'
import '../styles/index'
import classNames from "classnames";
interface IconProps{
    loading?:boolean
}
const LoadingIcon:FC<IconProps>=(props)=>{
    const {loading}=props
    const classes=classNames({
        'icon':true,
        // [`${prefixCls}-icon`]:true
    })

    return(
        <svg className={classes} aria-hidden="true">
            <use xlinkHref="#icon-jiazaizhong"></use>
        </svg>
    )
}
export default LoadingIcon