import React,{FC} from "react";
import './index.css'
interface ButtonProps{
    disabled?:boolean
}
const Button:FC<ButtonProps> = (props) => {

    return(
        <div> 按钮</div>
    )
}
export default Button