import React,{FC} from "react";
import './index.css'
interface ButtonProps{
    disabled?:boolean
}
const Button:FC<ButtonProps> = (props) => {
    console.log("button12131")
    return(
        <div className={'btn'}> xxx{JSON.stringify(props.disabled)}</div>
    )
}
export default Button