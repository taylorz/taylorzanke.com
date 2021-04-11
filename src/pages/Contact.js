import React from 'react';
import styled from 'styled-components'

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'

const StyledLink = styled.a`
 text-decoration: none;
`;

const Contact = () => (
  <PageContainer>

    <Grid container>
      <Grid item xs={12} md={6}>
        <Text p bold>Contact</Text>
        <Text>Taylor Zanke</Text>
        <Text p>Los Angeles, California</Text>
        <StyledLink href="mailto: mail@taylorzanke.com"><Text hoverable>mail@taylorzanke.com</Text></StyledLink>
        <StyledLink href="http://instagram.com/taylorzanke/"><Text hoverable>Instagram</Text></StyledLink>
      </Grid>
    </Grid>

  </PageContainer>
)

export default Contact
