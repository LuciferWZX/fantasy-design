import React, { FC } from "react";
import { SizeType } from "../config-provider/SizeContext";
import './style/index.less';
declare const ButtonTypes: ["default", "primary", "dashed", "link", "text"];
export declare type ButtonType = typeof ButtonTypes[number];
declare const ButtonShapes: ["default", "circle", "round"];
export declare type ButtonShape = typeof ButtonShapes[number];
export interface ButtonProps {
    type?: ButtonType;
    disabled?: boolean;
    size?: SizeType;
    prefixCls?: string;
    style?: React.CSSProperties;
    block?: boolean;
    danger?: boolean;
    ghost?: boolean;
    className?: string;
    shape?: ButtonShape;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
}
declare const Button: FC<ButtonProps>;
export default Button;
