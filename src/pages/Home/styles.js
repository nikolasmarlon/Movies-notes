import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    height: 100vh;   


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

    > main {
        grid-area: content;
        overflow-y: auto;
        width: 85%;
        margin: 40px auto;        
        max-height: 80%;
        padding-right: 16px;       
    }
    

`
export const AdicionarFilme = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;  
    margin-bottom : 30px;
        
    button{
        width: 200px;
    }

`

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    gap: 24px;


    
`