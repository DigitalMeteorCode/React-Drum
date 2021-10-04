import styled from "styled-components";

import GridButton from "./GridButton";

const list = ["el1", "el2", "el3", "el4", "el5", "el6", "el7", "el8", "el9"];

export default function Home() {
    return(
        <Wrapper>
            <Grid>
                {list.map((el)=>{
                    return <GridButton key={el}>{el}</GridButton>
                })}
            </Grid>
        </Wrapper>
    );
}

const Wrapper = styled.div``;

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
column-gap: 12px;
row-gap: 12px;
margin: auto;
padding: 24px;
width: 900px;
height: 900px;
border: solid 1px aqua;

@media(max-width : 640px) {
    width: 300px;
    height: 300px;
}
`;
