import React, { useState } from 'react';
import styled from 'styled-components'

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'
import { isExternalModuleNameRelative } from 'typescript';

const StyledBookImage = styled.img`
  width: 100%;
`;
const StyledImageWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;
const StyledPrev = styled.div`
  position: absolute;
  width: 50%;
  left: 0;
  top: 0;
  bottom: 0;
  /* background: red; */
  &:hover {
    cursor: w-resize;
  }
`;
const StyledNext = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
  bottom: 0;
  /* background: blue; */
  &:hover {
    cursor: e-resize;
  }
`;

const BookPage = ({ ...props }) => {
  const [ currentBookImage, setCurrentBookImage ] = useState(0)
  const numOfImages = props.book.images[0].length

  const onClickNext = () => {
    if (currentBookImage + 1 === numOfImages) {
      setCurrentBookImage(0)
    } else {
      setCurrentBookImage(currentBookImage + 1)
    }
  }

  const onClickPrev = () => {
    if (currentBookImage - 1 === -1) {
      setCurrentBookImage(numOfImages - 1)
    } else {
      setCurrentBookImage(currentBookImage - 1)
    }
  }

  // console.log("numOfImages", numOfImages)
  // console.log("book", props.book.images[0][1].default)

  return (
    <PageContainer>
      <Grid container spacingX={2}>

        <Grid item xs={12} md={5} style={{flex: '1'}}>

          <Grid container spacingX={1} mb={2}>
            <Grid item md={.75} lg={.5}><Text>{props.book.id}</Text></Grid>
            <Grid item md={1} lg={1}><Text>{props.book.year}</Text></Grid>
            <Grid item><Text bold>{props.book.title}</Text></Grid>
          </Grid>

          {props.book.description &&
            <Grid container mb={2}>
              <Grid item><Text>{props.book.description}</Text></Grid>
            </Grid>
          }

          <Grid container mb={2}>
            <Grid item xs={12}>
              {props.book.edition && <Text>Edition of {props.book.edition}</Text>}
              {props.book.pagesCount && <Text p>{props.book.pagesCount} pages</Text>}
            </Grid>
            <Grid item xs={12}>
              {props.book.dimensions && <Text>Dimensions: {props.book.dimensions}.</Text>}
              {props.book.textStock && <Text>Text: {props.book.textStock}.</Text>}
              {props.book.coverStock && <Text>Cover: {props.book.coverStock}.</Text>}
              {props.book.productionInfo && <Text>Production: {props.book.productionInfo}.</Text>}
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={12} md={7}>

          <Grid container mb={2}>
            <Grid item>
              <StyledImageWrapper>
                <StyledPrev onClick={onClickPrev} />
                <StyledBookImage src={props.book.images[0][currentBookImage].default} onClick={onClickNext} />
                <StyledNext onClick={onClickNext} />
              </StyledImageWrapper>
            </Grid>
          </Grid>

          <Grid container spacingX={2}>
            <Grid item xs={12}><Text bold>{currentBookImage + 1} of {numOfImages}</Text></Grid>
            <Grid item><Text hoverable onClick={onClickPrev}>Previous</Text></Grid>
            <Grid item><Text hoverable onClick={onClickNext}>Next</Text></Grid>
          </Grid>

        </Grid>

      </Grid>
    </PageContainer>
  )
}

export default BookPage
