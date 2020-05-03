
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Aboutpage.scss';
import SiteWrapper from '../../components/SiteWrapper/SiteWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Menu from '../../components/Menu/Menu';
import WorkImage from '../../components/WorkImage/WorkImage';
import TextBlock from '../../components/TextBlock/TextBlock';
import PageContent from '../../components/PageContent/PageContent';

import REFERENCES from '../../constants/references/references';

class Aboutpage extends Component {
  render() {
    return (
      <>
        <SiteWrapper>
          <PageContainer className="aboutpage">
            <Grid container className="about-content">
              <Grid item xs={10} md={6} className="artist-statement">
              <p>Taylor Zanke is an artist and designer living in Los Angeles, CA. He takes a multi-format approach to art making: producing models, drawings, photographs, and recordings, many of which are represented in singular artist books. Taylor’s practice studies the shifting nature of potential in space, and develops long-form methodologies for reflecting on and revealing it. He uncovers ways in which our inner lives can be supported by the material realities around us, grafting personal reflections into common forms and proposals.</p>
              <p>Taylor holds a BFA from Parsons the New School for Design, and a Masters of Architecture and Masters of Science in Real Estate Development from Columbia University.</p>
              </Grid>
              <Grid item xs={10} md={5} lg={4} className="about-details">
                <div className="details-section">
                  <div className="section-title">CONTACT</div>
                  <ul className="section-item">
                    <li>mail (at) taylorzanke.com</li>
                    <li>instagram.com/taylorzanke</li>
                  </ul>
                  <p>Please do reach out to discuss collaborations or commissions.</p>
                </div>
                <div className="details-section">
                  <div className="section-title">REFERENCES</div>
                  {REFERENCES.map((reference) =>
                    <div className="section-reference">
                      <div className="reference-quote">
                        <p><span>{reference.id}</span>{reference.quote}</p>
                      </div>
                      <div className="reference-citation">
                        <span className="author">{reference.authorLast}, {reference.authorFirst}. </span>{reference.year}. <span className="title">{reference.title}, </span> {reference.pageNumber}. {reference.publicationPlace}: {reference.publisher}.
                      </div>
                    </div>
                  )}
                </div>
              </Grid>
            </Grid>
          </PageContainer>
        </SiteWrapper>
      </>
    );
  }
}

export default Aboutpage;
