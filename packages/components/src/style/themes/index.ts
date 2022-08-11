import {lightTheme} from "./light";
import {darkTheme} from "./dark";
import {ThemeEnum} from "../../config-provider/types";

export const theme = {
    [ThemeEnum.LIGHT]:lightTheme,
    [ThemeEnum.DARK]:darkTheme,
}