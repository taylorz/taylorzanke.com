import React, { useState } from 'react';
import styled from 'styled-components'

import {
  Grid,
  Text
} from '../components/ui'
import PageContainer from '../components/PageContainer'
import WorkTitleContainer from '../components/WorkTitleContainer'

const StyledBookImage = styled.img`
  max-width: 100%;
  max-height: 500px;
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
  const [ currentRecordingImage, setCurrentRecordingImage ] = useState(0)
  const numOfImages = props.recording.images[0].length

  const onClickNext = () => {
    if (currentRecordingImage + 1 === numOfImages) {
      setCurrentRecordingImage(0)
    } else {
      setCurrentRecordingImage(currentRecordingImage + 1)
    }
  }

  const onClickPrev = () => {
    if (currentRecordingImage - 1 === -1) {
      setCurrentRecordingImage(numOfImages - 1)
    } else {
      setCurrentRecordingImage(currentRecordingImage - 1)
    }
  }

  // console.log("numOfImages", numOfImages)
  // console.log("book", props.book.images[0][1].default)

  return (
    <PageContainer>
      <Grid container spacingX={2}>

        <Grid item xs={12} md={5} style={{flex: '1'}}>

          <WorkTitleContainer
            year={props.recording.dateRecorded}
            id={props.recording.id}
            title={props.recording.title}
            isHeadline
          />

          {props.recording.description &&
            <Grid container mb={2}>
              <Grid item><Text>{props.recording.description}</Text></Grid>
            </Grid>
          }

          <Grid container mb={2}>
            <Grid item xs={12} mb={2}>
              {props.recording.release && <Text>{props.recording.release}</Text>}
              {props.recording.duration && <Text>{props.recording.duration} minutes</Text>}
            </Grid>

            <Grid item xs={12} mb={2}>
              {props.recording.trackList ?
                props.recording.trackList.map((t, i) =>
                  <Grid container>
                    <Grid item xs={4} sm={3} md={2.5}><Text>{t.duration}</Text></Grid>
                    <Grid item xs={8} sm={9} md={9.5}><Text>{t.title}</Text></Grid>
                  </Grid>
                )
              : null}
            </Grid>

            <Grid item xs={12} mb={2}>
              {props.recording.dateReleased ?
                <Grid container>
                  <Grid item xs={4} sm={3} md={2.5}><Text>Released</Text></Grid>
                  <Grid item xs={8} sm={9} md={9.5}><Text>{props.recording.dateReleased}</Text></Grid>
                </Grid>
              : null}
              {props.recording.format ?
                <Grid container>
                  <Grid item xs={4} sm={3} md={2.5}><Text>Format</Text></Grid>
                  <Grid item xs={8} sm={9} md={9.5}><Text>{props.recording.format}</Text></Grid>
                </Grid>
              : null}
              {props.recording.production ?
                <Grid container>
                  <Grid item xs={4} sm={3} md={2.5}><Text>Production</Text></Grid>
                  <Grid item xs={8} sm={9} md={9.5}><Text>{props.recording.production}</Text></Grid>
                </Grid>
              : null}
            </Grid>

            <Grid item xs={12}>
              {props.recording.listenUrl ?
                <Grid container>
                  <Grid item xs={4} sm={3} md={2.5}>
                    <a href={props.recording.listenUrl} target="_blank">
                      <Text hoverable>Listen</Text>
                    </a>
                  </Grid>
                </Grid>
              : null}
            </Grid>

          </Grid>

        </Grid>

        <Grid item xs={12} md={7}>


          <Grid container mb={2} justifyContent="flex-end">
            <Grid item>
              <StyledImageWrapper>
                {numOfImages.length ? <StyledPrev onClick={onClickPrev} /> : null}
                <StyledBookImage src={props.recording.images[0][currentRecordingImage].default} onClick={onClickNext} />
                {numOfImages.length ? <StyledNext onClick={onClickNext} /> : null}
              </StyledImageWrapper>
            </Grid>
          </Grid>

          {numOfImages.length ?
            <Grid container spacingX={2}>
              <Grid item xs={12}><Text bold>{currentRecordingImage + 1} of {numOfImages}</Text></Grid>
              <Grid item><Text hoverable onClick={onClickPrev}>Previous</Text></Grid>
              <Grid item><Text hoverable onClick={onClickNext}>Next</Text></Grid>
            </Grid>
          : null}

        </Grid>

      </Grid>
    </PageContainer>
  )
}

export default BookPage
