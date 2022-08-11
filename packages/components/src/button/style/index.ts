import styled from "styled-components";
import {lightTheme} from "../../style/themes/light";

export const StyledButton = styled.button`
    background: ${props => props.theme.primaryColor};
`
StyledButton.defaultProps={
    theme:lightTheme
}
