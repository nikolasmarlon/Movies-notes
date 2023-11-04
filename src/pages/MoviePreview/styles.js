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
        min-height: 300px;

       
       
    }
` 

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    > h1{
        font-size: 36px;
    }

    > p {
        font-size: 16px;
        font-weight: 400;

    }

    > button:first-child{
        align-self: start;
    }

    .header-moovie{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    #classification{
        display: flex;
        align-items: center;        
        gap: 19px;        
        padding: 0;
       
    }
    
    .stars{
        height: 47px;
        font-size: 20px;
        display: flex;
        align-items: center;
        color: ${( {theme} ) => theme.COLORS.RED_300};
    }

    #tags{
        margin-top: 15px;
    }

    .header-profile{
        display: flex;
        gap: 8px;
        align-items: center;
        
        font-size: 16px;

        >img{
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }

        > span{
            display: flex;
            align-items: center;
            gap: 8px;

            svg{
                color: ${( {theme} ) => theme.COLORS.RED_300};
                
            }
        }
        
    }

`