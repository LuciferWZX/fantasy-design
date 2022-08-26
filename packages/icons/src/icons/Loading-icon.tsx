import React from "react";
import {FC} from "react";
import '../source/icon-source'
import '../styles/index'
const LoadingIcon:FC=()=>{
    console.log(111)
    return(
        <svg className="fantasy-icon" aria-hidden="true">
            <use xlinkHref="#icon-loading0"></use>
        </svg>
    )
}
export default LoadingIcon