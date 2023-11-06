import styled from 'styled-components';

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
  
  display: flex;
  align-items: center;
  color: ${( {theme} ) => theme.COLORS.RED_300};
  
`;

export const Star = styled.div`
  color: ${(props) => (props.isFilled ? '${( {theme} ) => theme.COLORS.RED_300}' : 'none')};
`;