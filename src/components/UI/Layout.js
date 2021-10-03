import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

import GlobalStyle from "./GlobalStyle";

import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";

import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout({children}) {
    const [isLight, setIsLight] = useState(true);

    function handleToggleTheme() {
        setIsLight(!isLight);
    }

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Wrapper>
                <GlobalStyle />
                <Header isLight={isLight} handleToggleTheme={handleToggleTheme} />
                <Main>{children}</Main>
                <Footer />
            </Wrapper>
        </ThemeProvider>
    );
}

const Wrapper = styled.div``;

const Main = styled.div`
min-height: calc(100vh - 192px);
width: 96%;
max-width: 1240px;
margin: auto;
margin-top: 32px;
`;
/*100vh - 160px = 100% de la fenêtre moins les 80px du header et du footer*/
