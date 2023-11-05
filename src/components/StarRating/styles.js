import styled from 'styled-components';

export const StarContainer = styled.div`
  display: flex;
`;

export const Star = styled.div`
  color: ${(props) => (props.isFilled ? '${( {theme} ) => theme.COLORS.RED_300}' : 'none')};
`;