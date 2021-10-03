import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isLight, handleToggleTheme }){
    const location = useLocation();
    return (
        <Wrapper>
            <h1>Hello header</h1>
            <nav>
                <Link to="/">
                    <MenuEl isCurrentPage={location.pathname === "/"}>HOME</MenuEl>
                </Link>
                <Link to="/about">
                    <MenuEl isCurrentPage={location.pathname === "/about"}>ABOUT</MenuEl>
                </Link>
            </nav>
            <button onClick={handleToggleTheme}>
                Switch to {isLight ? "dark" : "light"} theme
            </button>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    height: 105px;
    display: flex;
    justify-content: space-between;
    padding: 0px 24px;
    align-items: center;
    border-bottom: solid 1px;
    & nav{
        display: flex;
    }
    & a{
        text-decoration: none;
        color: inherit;
    }
    & a:first-child{
        margin-right: 50px;
    }
`;

const MenuEl = styled.p`
    padding: 2px;
    border: solid 0.5px ${(props)=>(props.isCurrentPage ? "" : "transparent")};
    &:hover{
        border: solid 0.5px;
    }
`;
