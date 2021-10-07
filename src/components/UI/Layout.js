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
                <Header />
                <Main>{children}</Main>
                <Footer isLight={isLight} handleToggleTheme={handleToggleTheme} />
            </Wrapper>
        </ThemeProvider>
    );
}

const Wrapper = styled.div``;

const Main = styled.div`
min-height: calc(100vh - 185px);
width: 96%;
max-width: 1240px;
margin: auto;
display: flex;
`;

