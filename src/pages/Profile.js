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
        <Text p>I am a Canadian artist, designer, and musician based in Los Angeles, California. This is a personal archive—a digital space where I organize and reflect on what I make.</Text>
      </Grid>
    </Grid>

  </PageContainer>
)

export default Profile
