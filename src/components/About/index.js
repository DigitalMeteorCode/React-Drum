import styled from "styled-components";

export default function About() {
    return(
        <Wrapper>
            <h2>CREATED BY SARAH / DIGITAL METEOR</h2>
            <p>This simple music app was created during my studies as a training. This is my first web app using React.JS.
            </p>
            <h2>HOW TO USE</h2>
            <p>Click on the buttons to play sounds and music samples.<br/>You can add your own samples by clicking the 🎵.<br/>You can also use your numerical keypad to play the samples.</p>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: calc(100vh - 185px);
    width: 96%;
    max-width: 1240px;
    margin: auto;
    & h2 {
        font-size: 2rem;
        letter-spacing: 0.8rem;
        margin: 20px;
    }
    & p {
        font-size: 1.5rem;
        letter-spacing: 0.3rem;
        font-family: 'Noto Sans Display', sans-serif;
        margin: 50px auto;
    }
`;
