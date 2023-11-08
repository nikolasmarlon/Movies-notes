import styled from "styled-components";


export const DivContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${( {theme} ) => theme.COLORS.BACKGROUND_700}; 
    color: ${( {theme} ) => theme.COLORS.GRAY_600}; 
    
    margin-bottom: 8px;
    border-radius: 10px;

    >svg{
        margin: 0 16px;
    }
    
    >input{
        height: 56px;
        width: 100%;
        color: ${( {theme} ) => theme.COLORS.GRAY_600}; 
        padding: 18px 16px;
        background: transparent;
        border: none;

        &:placeholder{
            color: ${( {theme} ) => theme.COLORS.GRAY_600}; 
        }
    }

`