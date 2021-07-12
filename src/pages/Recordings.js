import React, { useState } from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'
import WorkTitleContainer from '../components/WorkTitleContainer'

import RECORDINGS from '../constants/recordings'

const StyledRecordingImagePreview = styled.img`
  max-width: 100%;
  max-height: 500px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
const StyledRecordingsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Recordings = () => {
  const [hoveredRecordingNumber, setHoveredRecordingNumber] = useState(null)

  function reverse(array){
    return array.map((item, idx) => array[array.length-1-idx])
  }

  const RECORDINGS_REVERSED = reverse(RECORDINGS)

  console.log({RECORDINGS_REVERSED})

  return (
    <PageContainer>

      <Grid container spacingX={2}>

        <Grid item xs={12} md={5} style={{flex: '1'}} mb={2}>
          <Text p bold>Recordings</Text>
          <StyledRecordingsList>
            {RECORDINGS_REVERSED.map((r, i) =>
              <li key={i}>
                <StyledNavLink to={`/recordings${r.route}`}>
                  <WorkTitleContainer
                    onMouseEnter={() => setHoveredRecordingNumber(r.id)}
                    onMouseLeave={() => setHoveredRecordingNumber(null)}
                    year={r.dateRecorded}
                    id={r.id}
                    title={r.title}
                  />
                </StyledNavLink>
              </li>
            )}
          </StyledRecordingsList>
        </Grid>

        <Grid item xs={12} md={7} alignItems="flex-end">
          {hoveredRecordingNumber &&
            <StyledRecordingImagePreview src={RECORDINGS[hoveredRecordingNumber - 1].images[0][0].default} />
          }
        </Grid>

      </Grid>
    </PageContainer>
  )
}


export default Recordings
