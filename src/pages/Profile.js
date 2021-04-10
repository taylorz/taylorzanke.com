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
        <Text p>Hello, I’m Taylor, a Canadian artist and designer based in Los Angeles, California. I'm a partner at Little Universe, a digital agency building products alongside clients of all sizes to help solve the climate crisis. I co-founded Figure Press, where I collaborate with artists and designers on books, bringing delicate new ideas to form. I also maintain my own small, independent office where I focus on self directed projects with an evolving set of concerns and requirements relating to architecture, graphic design, and art.</Text>

        <Text p bold>Education</Text>
        <Text line>M.Arch, M.S.</Text>
        <Text p>Columbia University</Text>
        <Text line>B.F.A.</Text>
        <Text p>Parsons The New School for Design</Text>

        {/* <Text p bold>Collaborators</Text> */}

      </Grid>
    </Grid>

  </PageContainer>
)

export default Profile
