import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom"
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import flowers from '../../assets/images/flowers.png'

const Homepage = () => (
  <PageContainer className="homepage-container">
    <Grid container className="section top-bar">
      <Grid item xs={12} sm={4}>
        Taylor Zanke
      </Grid>
      <Grid item xs={12} sm={8}>
        mail@taylorzanke.com
      </Grid>
    </Grid>
    <Grid container className="section summary dashed">
      <Grid item xs={6} sm={4}>
        <p>Introduction</p>
      </Grid>
      <Grid item xs={12} sm={8} className="page-section statement">
        <p>Hello, I’m Taylor, a Canadian artist and designer based in Los Angeles, California. I'm a partner at Little Universe, a digital agency building products alongside clients of all sizes to help solve the climate crisis. I co-founded Figure Press, where I collaborate with artists and designers on books, bringing delicate new ideas to form. I also maintain my own small, independent office where I focus on self directed projects with an evolving set of concerns and requirements relating to architecture, graphic design, and art.</p>
      </Grid>
    </Grid>
    <Grid container className="section education double">
      <Grid item xs={12} sm={4}>
        <p>Education</p>
      </Grid>
      <Grid item xs={12} sm={8}>
        <ul>
          <li>
            <p>M.Arch, M.S.</p> 
            <p>Columbia University<br/>Graduate School of Architecture Planning and Preservation</p>
          </li>
          <li>
            <p>B.F.A.</p>
            <p>Parsons The New School for Design</p>
          </li>
        </ul>
      </Grid>
    </Grid>
    <Grid container className="section contact">
      <Grid item xs={12} sm={4}>
        <p>Links</p>
      </Grid>
      <Grid item xs={12} sm={8}>
        <ul>
          <li className="no-spacing"><a href="https://www.taylorzankeoffice.com" target="_blank">Taylor Zanke Office</a></li>
          <li className="no-spacing"><a href="https://www.littleuniverse.com" target="_blank">Little Universe</a></li>
          <li className="no-spacing"><a href="https://www.figurepress.com" target="_blank">Figure Press</a></li>
          <li className="no-spacing"><a href="https://www.instagram.com/taylorzanke/" target="_blank">Instagram</a></li>
          <li className="no-spacing"><a href="https://taylorzanke.bandcamp.com/" target="_blank">Bandcamp</a></li>
        </ul>
      </Grid>
    </Grid>
  </PageContainer>
)

export default Homepage