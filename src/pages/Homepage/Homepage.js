import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';

import PageContainer from '../../components/PageContainer/PageContainer'
import Text from '../../components/ui/Text/Text'

const Homepage = () => (
  <PageContainer className="homepage-container">
   <Grid container>
      <Grid item>
        <Text>Taylor Zanke</Text>
      </Grid>
    </Grid>
  </PageContainer>
)

export default Homepage
