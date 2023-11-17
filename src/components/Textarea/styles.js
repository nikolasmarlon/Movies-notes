import styled from "styled-components";


export const Container = styled.textarea`
    width: 100%;
    height: 280px;

    background-color: ${( {theme} ) => theme.COLORS.BACKGROUND_700}; 
    color: ${( {theme} ) => theme.COLORS.GRAY_600}; 
    
    margin-bottom: 8px;
    border-radius: 10px;
    border: none;
    resize: none;
    margin-bottom: 10px;
    padding: 16px;

    padding: 18px 16px;

    &:placeholder{
            color: ${( {theme} ) => theme.COLORS.GRAY_600}; 
    }
`