import React from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import {
  Grid,
  Text
} from './ui'

const activeClassName = 'active'

const StyledNav = styled.div``;
const StyledNavText = styled(Text)``;
const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  &.${activeClassName} {
    ${StyledNavText} {
      color: ${(props) => props.isHome ? props.theme.color.black : props.theme.color.gray};
    }
  }
  ${StyledNavText} {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.color.gray};
    }
  }
`;
const StyledNavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  li {
    line-height: ${({ theme }) => theme.text.lineHeight}px;
  }
`;

const Nav = ({ ...props }) => {
  return (
    <StyledNav>
      <Grid container spacing={2} mb={2}>

        <Grid item xs={12}>
        <StyledNavList>
            <li><StyledNavLink isHome exact to="/"><StyledNavText bold>Taylor Zanke</StyledNavText></StyledNavLink></li>
          </StyledNavList>
        </Grid>

        <Grid item xs={12}>
          <StyledNavList>
            <li><StyledNavLink exact to="/books"><StyledNavText>Books</StyledNavText></StyledNavLink></li>
            {/* <li><StyledNavLink exact to="/recordings"><StyledNavText>Recordings</StyledNavText></StyledNavLink></li> */}
          </StyledNavList>
        </Grid>

        <Grid item xs={12}>
          <StyledNavList>
            {/* <li><StyledNavLink to="/statements"><StyledNavText>Statements</StyledNavText></StyledNavLink></li> */}
            <li><StyledNavLink to="/profile"><StyledNavText>Profile</StyledNavText></StyledNavLink></li>
            <li><StyledNavLink to="/contact"><StyledNavText>Contact</StyledNavText></StyledNavLink></li>
          </StyledNavList>
        </Grid>

      </Grid>
    </StyledNav>
  )
}

export default Nav
