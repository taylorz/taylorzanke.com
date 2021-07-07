import React from 'react';
import styled from 'styled-components'

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'

const StyledRecordingsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Recordings = () => (
  <PageContainer>
    <Grid container>

      <Grid item xs={12} md={6}>
        <Text p bold>Recordings</Text>
        <StyledRecordingsList>
          <li>
            <Grid container>
              <Grid item>
                <Text>Untitled</Text>
              </Grid>
            </Grid>
          </li>
        </StyledRecordingsList>
      </Grid>

    </Grid>
  </PageContainer>
)

export default Recordings
