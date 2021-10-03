import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";

export default function Layout({children}) {
    const [isLight, setIsLight] = useState(true);

    function handleToggleTheme() {
        setIsLight(!isLight);
    }

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
            <Wrapper>
                <GlobalStyle />
                {children}
                <button onClick={handleToggleTheme}>
                    Switch to {isLight ? "dark" : "light"} theme
                </button>
            </Wrapper>
        </ThemeProvider>
    );
}

const Wrapper = styled.div``;