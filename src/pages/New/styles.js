import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: "header" "content";


    ::-webkit-scrollbar {
        width: 8px;
        
    }   
    
    ::-webkit-scrollbar-thumb {
        background-color: ${( {theme} ) => theme.COLORS.RED_300};
        border-radius: 10px;   
        border: 1px solid red;
    }

    ::-webkit-scrollbar-track-piece:end {
    
        margin-bottom: 100px; 
    }

    ::-webkit-scrollbar-track-piece:start {
    
        margin-top: 80px;
    }
    

    > main{        
        grid-area: content;
        overflow-y: auto;
        width: 85%;
        margin: 0px auto;        
       
        padding-right: 16px;      
    }

    #marcadores{
        display: flex;
        flex-direction: column;
        margin-top: 40px;

        h2{
            font-size: 20px;
            color: ${( {theme} ) => theme.COLORS.GRAY_700};
            font-weight: 400;
        }
    }

    .tags{
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        padding: 16px;
        border-radius: 10px;
        background: ${( {theme} ) => theme.COLORS.BACKGROUND_900};
    }

`

export const Form = styled.form`
    grid-area: "content";
    max-width: 1100px;
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