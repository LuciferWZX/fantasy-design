import {ThemeProvider as SCThemeProvider} from 'styled-components'
import React, {FC} from "react";
import {ThemeEnum} from "./types";
import {theme as themes} from "../style/themes";

interface ThemeProviderProps{
    theme?:ThemeEnum
    children?:React.ReactNode
}
const ThemeProvider:FC<ThemeProviderProps> = (props) => {
    const {theme,children}=props
    return(
        <SCThemeProvider theme={themes[theme ?? ThemeEnum.LIGHT]}  >
            {children}
        </SCThemeProvider>
    )
}
export default ThemeProvider