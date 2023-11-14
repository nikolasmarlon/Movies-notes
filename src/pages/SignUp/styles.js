import styled from "styled-components"
import capaLogin  from '../../assets/capa-cinema.png'

// color: ${( {theme} ) => theme.COLORS.RED_300};  

export const DivContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    > h1{
        font-size: 48px;
        font-weight: bold;
        color: ${( {theme} ) => theme.COLORS.RED_300}; 
    }
    
    > p{
        font-size: 14px;
        color: ${( {theme} ) => theme.COLORS.GRAY_500}; 
    }
    
    > h2{
        
        font-size: 24px;
        margin-top: 48px;
        margin-bottom: 48px;
        font-weight: 500;
    }
    
    > a{
        margin-top: 42px;
        color: ${( {theme} ) => theme.COLORS.RED_300};         
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

`

export const Background = styled.div`
    flex: 1;
    background: url(${capaLogin}) no-repeat center center;
    background-size: cover;
`