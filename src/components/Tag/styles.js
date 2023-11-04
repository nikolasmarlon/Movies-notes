import styled from "styled-components";


export const SpanContainer = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${( {theme} ) => theme.COLORS.GRAY_100};
    padding: 8px 16px;
    height: 30px;
    border-radius: 8px;
    margin-right: 8px;
    background-color: ${( {theme} ) => theme.COLORS.BACKGROUND_600};

`