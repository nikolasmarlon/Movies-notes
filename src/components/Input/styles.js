import styled from "styled-components";


export const DivContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${( {theme} ) => theme.COLORS.BACKGROUND_700}; 
    color: ${( {theme} ) => theme.COLORS.GRAY_600}; 
    
    margin-bottom: 8px;
    border-radius: 10px;
    

    // lança uma borda na div do input em focus 
    &:focus-within{
        outline: 1px solid ${( {theme} ) => theme.COLORS.RED_300}; // trocado border por outline, pois a borda deslocava os elementos para cima durante a seleção
    }

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
        

        //Muda o a cor e borda do autofocus do nevegador 
        &:-webkit-autofill{
            -webkit-box-shadow: 0 0 0 30px gray inset;
            border-radius: 0 10px 10px 0;
        }

        
        &:-webkit-autofill {
            -webkit-text-fill-color: ${( {theme} ) => theme.COLORS.GRAY_900};
        }
        &:placeholder{
            color: ${( {theme} ) => theme.COLORS.GRAY_600}; 
        }
    }

`