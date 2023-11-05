import styled from "styled-components";


export const Container = styled.button`

    display: flex;
    flex-direction: column;


    width: 100%;
    background-color: ${( {theme} ) => theme.COLORS.BACKGROUND_RED_MOVIE};

    border-radius: 16px;
    border: none ;
    padding: 32px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${( {theme} ) => theme.COLORS.WHITE};
    }

    > div span {
        color: ${( {theme} ) => theme.COLORS.RED_300};
    }
    
    p{
        color: ${( {theme} ) => theme.COLORS.GRAY_700};
        text-align: left;

    }   
    
    > footer{
        width: 100%;
        display: flex;
        margin-top: 40px;
    }
`