import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        transition : linear 0.25s;
        background-color : ${props=>props.theme.backgroundColor};
        color : ${props=>props.theme.mainColor};
    }
`;

export default GlobalStyle;