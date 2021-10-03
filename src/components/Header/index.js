import styled from "styled-components";

export default function Header({ isLight, handleToggleTheme }){
    return (
        <Wrapper>
            <h1>Hello header</h1>
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
`;
