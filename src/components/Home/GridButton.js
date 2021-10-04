import styled from "styled-components";

export default function GridButton({ isPlayed = false, soundPlay }) {
    return (
        <Wrapper isPlayed={isPlayed} onClick={soundPlay}>
        </Wrapper>
    );
}

const Wrapper = styled.div`
border-radius: 5px;
background: #7952B3;
background: radial-gradient(
    circle, 
    #A5E1AD 0%, 
    #7952B3 100%);
position: relative;
overflow: hidden;
&::before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background: radial-gradient(
        circle, 
        #EDFFA9 ${(props)=>(props.isPlayed ? "20%" : "0%")}, 
        #AE00FB 100%);
    opacity: ${(props)=>(props.isPlayed ? "1" : "0")};
    transition: linear 0.2s;
}
&:hover::before{
    opacity: 1;
}
&:active::before{
    opacity: 1;
    background: radial-gradient(
        circle, 
        #EDFFA9 10%, 
        #AE00FB 80%);
}
`;
