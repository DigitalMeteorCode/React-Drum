import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header(){
    const location = useLocation();
    return (
        <Wrapper>
            <h1>MUSIC APP</h1>
            <nav>
                <Link to="/">
                    <MenuEl isCurrentPage={location.pathname === "/"}>HOME</MenuEl>
                </Link>
                <Link to="/about">
                    <MenuEl isCurrentPage={location.pathname === "/about"}>ABOUT</MenuEl>
                </Link>
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    height: 105px;
    display: flex;
    justify-content: space-between;
    padding: 0px 30px;
    align-items: center;
    & nav{
        display: flex;
    }
    & a{
        text-decoration: none;
        color: inherit;
    }
    & a:first-child{
        margin-right: 15px;
    }
`;

const MenuEl = styled.p`
    font-size: 2rem;
    padding: 2px;
    border: solid 0.5px ${(props)=>(props.isCurrentPage ? "" : "transparent")};
    &:hover{
        border: solid 0.5px;
    }
`;
