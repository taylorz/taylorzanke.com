import React from 'react';

import {
  Grid,
  Text
} from './ui'
import PageContainer from '../../components/PageContainer'

import image1 from '../../assets/work-images/01-5.jpg'
import image2 from '../../assets/work-images/02-29.jpg'
import image3 from '../../assets/work-images/03-2.jpg'
import image4 from '../../assets/work-images/04-7.jpg'
import image5 from '../../assets/work-images/05-28.jpg'
import image6 from '../../assets/work-images/06-46.jpg'
import image7 from '../../assets/work-images/07-57.jpg'
import image8 from '../../assets/work-images/08-7.jpg'
import image9 from '../../assets/work-images/09-10.jpg'
import image10 from '../../assets/work-images/10-37.jpg'
import image11 from '../../assets/work-images/11-17.jpg'

const Homepage = () => (
  <PageContainer className="homepage-container">
   <Grid container>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item>
            <Text>Taylor Zanke</Text>
          </Grid>
          <Grid item xs={6}>
            <Text>Two Cities Diary: Honolulu, New York. 2013.</Text>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}><img src={image1} style={{width: '100%'}} /></Grid>
          {/* <Grid item xs={12}><img src={image2} style={{width: '100%'}} /></Grid>
          <Grid item xs={12}><img src={image3} style={{width: '100%'}} /></Grid>
          <Grid item xs={12}><img src={image4} style={{width: '100%'}} /></Grid>
          <Grid item xs={12}><img src={image5} style={{width: '100%'}} /></Grid>
          <Grid item xs={12}><img src={image6} style={{width: '100%'}} /></Grid>
          <Grid item xs={12}><img src={image7} style={{width: '100%'}} /></Grid>
          <Grid item xs={12}><img src={image8} style={{width: '100%'}} /></Grid>
          <Grid item xs={12}><img src={image9} style={{width: '100%'}} /></Grid>
          <Grid item xs={12}><img src={image10} style={{width: '100%'}} /></Grid>
          <Grid item xs={12}><img src={image11} style={{width: '100%'}} /></Grid> */}
        </Grid>
      </Grid>
    </Grid>
  </PageContainer>
)

export default Homepage
