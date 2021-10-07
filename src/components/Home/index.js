import styled from "styled-components";

import GridButton from "./GridButton";
import useSounds from "hooks/useSounds";



export default function Home() {
    const {buttonsList} = useSounds();
    return(
        <Wrapper>
            <Grid>
                {buttonsList.map(({ soundPlay, isPlayed, id, handleSampleChange }, index)=>{
                    return ( 
                    <GridButton 
                    key={index} 
                    soundPlay={soundPlay} 
                    isPlayed={isPlayed} 
                    id={id}
                    handleSampleChange={handleSampleChange}/>
                    );
                })}
            </Grid>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;


const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 12px;
    row-gap: 12px;
    margin: auto;
    padding: 24px;
    width: 900px;
    height: 900px;

    @media(max-width : 640px) {
        width: 300px;
        height: 300px;
    }
`;
