import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;
    border-bottom: 1px solid ${( {theme} ) => theme.COLORS.GRAY_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 23px 12%;

    /**color: ${( {theme} ) => theme.COLORS.BACKGROUND_800}; */

`

export const Profile = styled.div`

    display: flex;
    align-items: center;
    gap: 10px;
    

    > img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 1px solid ${( {theme} ) => theme.COLORS.GRAY_800};
    }

    > div{
        display: flex;
        flex-direction: column;   
        align-items: flex-end;

        button{
            border: none;
            font-size: 14px;
            color: ${( {theme} ) => theme.COLORS.GRAY_600};
            padding: 0;
            font-weight: 400;
            background: none;
        }
        strong{
            border: none;
            font-size: 14px;
            color: ${( {theme} ) => theme.COLORS.WHITE};
            padding: 0;
            font-weight: bold;
        }
        
    }
`

export const Search = styled.input`
    width: 700px;
    height: 56px;
    padding: 19px 24px;
    border-radius: 10px;
    background-color: ${( {theme} ) => theme.COLORS.BACKGROUND_700};
    color: ${( {theme} ) => theme.COLORS.GRAY_600};
    border: none;
    font-size: 14px;
`