import React from 'react';
import styled from 'styled-components'

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'

const Recordings = () => (
  <PageContainer>
    <Grid container>

      <Grid item xs={12} md={6}>
        <Text p bold>Recordings</Text>
      </Grid>

    </Grid>
  </PageContainer>
)

export default Recordings
