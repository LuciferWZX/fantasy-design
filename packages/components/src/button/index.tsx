import React,{FC} from "react";
import './index.css'
interface ButtonProps{
    disabled?:boolean
}
const Button:FC<ButtonProps> = (props) => {

    return(
        <div className={'btn'}> xxx{JSON.stringify(props.disabled)}</div>
    )
}
export default Button