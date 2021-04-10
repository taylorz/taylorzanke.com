import React, { useState }from 'react';
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'

import BOOKS from '../constants/books/index'

const StyledBookImagePreview = styled.img`
  width: 100%;
`;
const StyledListText = styled(Text)``;
const BookItemContainer = styled(Grid)`
  &:hover {
    cursor: pointer;
    ${StyledListText} {
      color: ${({ theme }) => theme.color.gray};
    }
  }
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;
const StyledBookList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`

const Books = ({ ...props }) => {
  const [ hoveredBookNumber, setHoveredBookNumber ] = useState(null)

  // console.log("BOOKS[0].images", BOOKS[0].images[0][0])
  // console.log({hoveredBookNumber})

  return (
    <PageContainer>

      <Grid container spacingX={2}>

        <Grid item xs={12} md={5} style={{flex: '1'}}>
          <Text p bold>Books</Text>
          <StyledBookList>
            {BOOKS.map((b, i) =>
              <li>
                <StyledNavLink to={`/books${b.route}`}>
                  <BookItemContainer
                    container
                    spacingX={1}
                    onMouseEnter={() => setHoveredBookNumber(b.id)}
                    onMouseLeave={() => setHoveredBookNumber(null)}
                  >
                    <Grid item md={.75} lg={.5}><StyledListText>{b.id}</StyledListText></Grid>
                    <Grid item md={1} lg={1}><StyledListText>{b.year}</StyledListText></Grid>
                    <Grid item><StyledListText>{b.title}</StyledListText></Grid>
                  </BookItemContainer>
                </StyledNavLink>
              </li>
            )}
          </StyledBookList>
        </Grid>

        <Grid item xs={12} md={7}>
          {hoveredBookNumber &&
            <StyledBookImagePreview src={BOOKS[hoveredBookNumber - 1].images[0][0]} />
          }
        </Grid>

      </Grid>

    </PageContainer>

  )
}

export default Books
