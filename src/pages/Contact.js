import React from 'react';

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'

const Contact = () => (
  <PageContainer>

    <Grid container>
      <Grid item xs={12} md={6}>
        <Text p bold>Contact</Text>
        <Text p>Taylor Zanke</Text>
        <Text line>Los Angeles, California</Text>
        <Text line>Email: mail@taylorzanke.com</Text>
      </Grid>
    </Grid>

  </PageContainer>
)

export default Contact
