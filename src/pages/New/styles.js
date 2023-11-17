import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: "header" "content";
`

export const Form = styled.form`
    grid-area: "content";
    max-width: 800px;
    margin: 40px auto;


    > header {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-bottom: 40px;

        >a{
            display: flex;   
            align-items: center ;
            gap: 8px;            
            color: ${( {theme} ) => theme.COLORS.RED_300};

            svg{
                font-size: 20px;                
            }
        }        
    }

    >div{
            display: flex;
            gap: 40px;
            margin-bottom: 40px;
    }

    
`