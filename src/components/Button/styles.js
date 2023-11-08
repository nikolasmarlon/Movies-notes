import styled from "styled-components";


export const ButtonContainer = styled.button`
    width: 100%;
    background-color: ${( {theme} ) => theme.COLORS.RED_300};
    color: ${( {theme} ) => theme.COLORS.BACKGROUND_800};

    height: 56px;
    border: none;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:disabled{
        opacity: 0.5;
        
    }
`