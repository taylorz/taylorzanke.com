import React from 'react';

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'

const Profile = () => (
  <PageContainer>

    <Grid container>
      <Grid item xs={12} md={5}>
        <Text p bold>Profile</Text>
        <Text p>Taylor is a Canadian artist and designer based in Los Angeles, California.</Text>
      </Grid>
    </Grid>

  </PageContainer>
)

export default Profile
