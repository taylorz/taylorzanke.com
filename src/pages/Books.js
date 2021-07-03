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
      color: ${({ theme }) => theme.color.secondary};
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

  function reverse(array){
    return array.map((item,idx) => array[array.length-1-idx])
  }

  const BOOKS_REVERSED = reverse(BOOKS)

  return (
    <PageContainer>

      <Grid container spacingX={2}>

        <Grid item xs={12} md={5} style={{flex: '1'}} mb={2}>
          <Text p bold>Books</Text>
          <StyledBookList>
            {BOOKS_REVERSED.map((b, i) =>
              <li key={i}>
                <StyledNavLink to={`/books${b.route}`}>
                  <BookItemContainer
                    container
                    // spacingX={1}
                    onMouseEnter={() => setHoveredBookNumber(b.id)}
                    onMouseLeave={() => setHoveredBookNumber(null)}
                  >
                    <Grid item xs={1.5}><StyledListText>{b.year}</StyledListText></Grid>
                    <Grid item xs={1}><StyledListText>{b.id}</StyledListText></Grid>
                    <Grid item xs={9.5}><StyledListText>{b.title}</StyledListText></Grid>
                  </BookItemContainer>
                </StyledNavLink>
              </li>
            )}
          </StyledBookList>
        </Grid>

        <Grid item xs={12} md={7}>
          {hoveredBookNumber &&
            <StyledBookImagePreview src={BOOKS[hoveredBookNumber - 1].images[0][0].default} />
          }
        </Grid>

      </Grid>

    </PageContainer>

  )
}

export default Books
