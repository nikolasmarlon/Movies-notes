import styled from "styled-components";


export const  DivContainer = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header" 
    "content";


    > main {
        grid-area: content;
        overflow-y: scroll;
        width: 85%;
        margin: 40px auto;
        
    }
` 

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    > h1{
        font-size: 36px;
    }

    > button:first-child{
        align-self: start;
    }
`