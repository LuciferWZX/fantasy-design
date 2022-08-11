export enum ThemeEnum {
    LIGHT='light',
    DARK='dark'
}
export interface ThemeType{
    light:FantasyTheme,
    dark:FantasyTheme
}
export interface FantasyTheme{
    primaryColor:string,
}