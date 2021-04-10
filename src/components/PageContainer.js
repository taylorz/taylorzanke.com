import React from 'react';
import styled from 'styled-components'

const StyledPageContainer = styled.div`
  width: 100%;
`;

const PageContainer = ({ children, ...props }) => {

  return (
    <StyledPageContainer>
      {children}
    </StyledPageContainer>
  )

}

export default PageContainer
