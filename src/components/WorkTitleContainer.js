import React from 'react';
import styled from 'styled-components'

import {
  Grid,
  Text
} from '../components/ui'

const StyledWorkTitleContainer = styled(Grid)`
  &:hover {
    cursor: ${props => !props.isHeadline && 'pointer'};
    * {
      color: ${props => !props.isHeadline && props.theme.color.secondary};
    }
  }
`;

const WorkTitleContainer = ({ year, id, title, isHeadline, onMouseEnter, onMouseLeave }) => {
  return (
    <StyledWorkTitleContainer container mb={isHeadline && 2} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} isHeadline={isHeadline}>
      <Grid item xs={2} sm={1.75} md={1.5}><Text>{year}</Text></Grid>
      <Grid item xs={2} sm={1.25} md={1}><Text>{id}</Text></Grid>
      <Grid item xs={8} sm={9} md={9.5}><Text bold={isHeadline}>{title}</Text></Grid>
    </StyledWorkTitleContainer>
  )
}

export default WorkTitleContainer
