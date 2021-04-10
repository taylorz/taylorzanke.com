import React from 'react';

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'

const Press = () => (
  <PageContainer>
    <Grid container>
      <Grid item xs={12} md={6}>
        <Text p bold>Statements</Text>
        <Text p></Text>
      </Grid>
    </Grid>
  </PageContainer>
)

export default Press
