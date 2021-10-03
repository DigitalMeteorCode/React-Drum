import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        transition : linear 0.25s;
        background-color : ${props=>props.theme.backgroundColor};
        color : ${props=>props.theme.mainColor};
        font-family: 'Advent Pro', sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
    }
    button {
        font-family: 'Advent Pro', sans-serif;
        font-weight: bold;
        padding: 12px 20px;
        background-color : ${props=>props.theme.backgroundColor};
        color : ${props=>props.theme.mainColor};
        border: solid 0.5px;
        transition: linear 0.40s;
    }
    button:hover {
        color : ${props=>props.theme.backgroundColor};
        background-color : ${props=>props.theme.mainColor};
    }
    h1{
        font-size: 2rem;
    }
    h2{
        font-size: 1.5rem;
    }
    h1, h2, h3, h4, h5{
        letter-spacing: 2px;
    }
`;

export default GlobalStyle;