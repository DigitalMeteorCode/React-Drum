import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isLight, handleToggleTheme }){
    const location = useLocation();
    return (
        <Wrapper>
            <h1>Hello header</h1>
            <nav>
                <Link to="/">
                    HOME
                </Link>
                <Link to="/about">
                    ABOUT
                </Link>
            </nav>
            <button onClick={handleToggleTheme}>
                Switch to {isLight ? "dark" : "light"} theme
            </button>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0px 25px;
    align-items: center;
    border-bottom: solid 1px;
    & a{
        text-decoration: none;
        color: inherit;
    }
    & a:first-child{
        margin-right: 12px;
    }
`;
