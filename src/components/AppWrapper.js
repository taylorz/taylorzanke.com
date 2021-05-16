import React from 'react';
import styled from 'styled-components'

const StyledAppWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  max-width: ${({ theme }) => theme.breakpoint.lg}px;
  padding: ${({ theme }) => theme.util.buffer * 4}px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoint.sm}px) {
    padding: ${({ theme }) => theme.util.buffer * 2}px;
  }
`;

const AppWrapper = ({ children, ...props }) => {
  return (
    <StyledAppWrapper>
      {children}
    </StyledAppWrapper>
  )
}

export default AppWrapper
