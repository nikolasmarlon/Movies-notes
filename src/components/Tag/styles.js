import styled from "styled-components";


export const SpanContainer = styled.span`
    font-size: 12px;
    padding: 8px 16px;
    height: 30px;
    border-radius: 8px;
    margin-right: 8px;
    color: ${( {theme} ) => theme.COLORS.GRAY_100};
    background-color: ${( {theme} ) => theme.COLORS.BACKGROUND_600};

`