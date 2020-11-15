import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from "react-router-dom"
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'

const year = new Date().getFullYear()

const Homepage = () => (
  <PageContainer className="homepage-container">
    <Grid container className="header">
      <Grid item xs={0} sm={1}/>
      <Grid item xs={6} sm={2} className="animate-1">
        <NavLink exact to="/">TAYLOR ZANKE</NavLink>
      </Grid>
      <Grid item xs={6} sm={2} className="animate-2">.COM</Grid>
      {/* <Grid item xs={6} sm={2}><a href="https://www.littleuniverse.com/" target="_blank">LITTLE UNIVERSE</a></Grid>
      <Grid item xs={6} sm={2}><a href="https://www.taylorzankeoffice.com/" target="_blank">TAYLOR ZANKE, OFFICE</a></Grid> */}
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4} className="page-section statement">
        <p className="header">ABOUT</p>
        <p>Hello, I’m Taylor, a Canadian artist and designer based in Los Angeles, California. I’m a Partner at Little Universe, a digital agency building products alongside clients of all sizes to help solve the climate crisis. I also maintain my own small, independent office, where I mostly focus on self directed projects with an evolving set of concerns and requirements relating to architecture and art.</p>
        <p>In my role at Little Universe I work closely with our clients to find opportunities for design to bring new forms of value to their digital platforms. Sometimes this means developing a product from scratch, in other cases it means identifying interventions which can be made in an existing context to address a specific need. Both of these conditions bring exciting opportunities to write code, develop and critique design, and operate as a member of our team. To me, the key design question of our practice at Little Universe, among many others, is whether the forms we choose are appropriate and relevant within the domain we have situated ourselves: addressing existential threat of climate change. In the context of digital product design this means asking questions about what engineering decisions are made, what user experience patterns are used, and what interactions feel like. It also means forming opinions about our design ethic, and questioning ideas like engagement, efficiency, function, clarity, optimism, hope, and joy. Through Little Universe I try to do my part in fulfilling the climate mandate critical to our future as a species.</p>
        <p>In my self directed projects I develop experimental ways of working and thinking which are personal and habitual. Though formalized as an office the output of my efforts are not intended to be transacted and the processes are not intended to be systematized, but rather they are meant to grow from a certain frame of mind, finding stability in themselves through a process of serendipity and accretion. Artistically I am focused on the form of the mundane and the development of diaristic responses to it. I attempt to transcribe and store perceptions, feelings, or memories I experience with familiar and common forms. These efforts have resulted in a practice of practices, within which I develop books, photographs, models, drawings, and recordings. Often these media influence one another, or make appearances within or alongside each other, as trains-of-thought and inner lives are carried across days, months, or years. In this practice I strive for a thematic density capable of attracting its own development.</p>
        <p>I would be excited to discuss any of the above with you, and would be happy to communicate about collaborations. Thank you for visiting my website.</p>
        <p>All the best,</p>
        <p>Taylor</p>
      </Grid>
      <Grid item xs={12} sm={2} className="page-section  education">
        <p className="header">EDUCATION</p>
        <ul>
          <li><span>M.Arch, M.S.</span> Columbia University Graduate School of Architecture Planning and Preservation</li>
          <li><span>B.F.A.</span> Parsons The New School for Design</li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={2} className="page-section  links">
        <p className="header">SITES</p>
        <ul>
          <li className="no-spacing"><a href="https://www.littleuniverse.com/" target="_blank">Little Universe</a></li>
          <li className="no-spacing"><a href="https://www.taylorzankeoffice.com/" target="_blank">Taylor Zanke, Office</a></li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={2} className="page-section  links">
        <p className="header">CONTACT</p>
        <ul>
          <li className="no-spacing">mail@taylorzanke.com</li>
          <li className="no-spacing"><a href="https://www.instagram.com/taylorzanke/" target="_blank">Instagram</a></li>
          <li className="no-spacing"><a href="https://taylorzanke.bandcamp.com/" target="_blank">Bandcamp</a></li>
        </ul>
      </Grid>
    </Grid>
  </PageContainer>
)

export default Homepage