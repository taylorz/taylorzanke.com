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
        <StyledLink href="mailto: mail@taylorzanke.com"><Text hoverable p>mail@taylorzanke.com</Text></StyledLink>
        <StyledLink href="https://instagram.com/taylorzanke" target="_blank"><Text hoverable>Instagram</Text></StyledLink>
        <StyledLink href="https://taylorzanke.bandcamp.com/" target="_blank"><Text hoverable>Bandcamp</Text></StyledLink>
      </Grid>
    </Grid>

  </PageContainer>
)

export default Contact
