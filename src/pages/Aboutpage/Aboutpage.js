
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

class Aboutpage extends Component {
  state = {
    menuOpened: false,
  }
  toggleMenu() {
    this.setState({
      menuOpened: !this.state.menuOpened,
    });
  }
  render() {
    return (
      <>
        <SiteWrapper menuState={this.state.menuOpened ? "menu-opened" : "menu-closed"}>
          <Menu onClick={() => this.toggleMenu()}/>
          <PageContainer className="aboutpage">
            <Header onClick={() => this.toggleMenu()} linkName="HOME" link="/"/>
            <Grid container className="about-content">
              <Grid item xs={12} md={6} lg={5} className="artist-statement">Taylor Zanke is a Canadian artist living in Los Angeles, CA. He produces books, models, drawings, and recordings, in an effort to investigate and reveal new potentials for space.</Grid>
              <Grid item xs={12} md={4} lg={3} className="about-details">
                <div className="details-section">
                  <div className="section-title">CONTACT</div>
                  <ul className="section-item">
                    <li>mail (at) taylorzanke.com</li>
                    <li>instagram.com/taylorzanke</li>
                  </ul>
                  <p>Please do reach out to discuss collaborations or commissions.</p>
                </div>
                <div className="details-section">
                  <div className="section-title">ANNOUNCEMENTS</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla nisi vel pulvinar condimentum. Nulla quis sollicitudin lectus. Quisque vel mauris eu neque aliquet cursus. Vivamus efficitur tortor at metus commodo, id luctus nibh tincidunt. Ut efficitur enim in tincidunt lobortis. Donec ac lobortis erat, at dapibus nunc.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla nisi vel pulvinar condimentum. Nulla quis sollicitudin lectus. Quisque vel mauris eu neque aliquet cursus. Vivamus efficitur tortor at metus commodo, id luctus nibh tincidunt. Ut efficitur enim in tincidunt lobortis. Donec ac lobortis erat, at dapibus nunc.</p>
                </div>
                <div className="details-section">
                  <div className="section-title">REFERENCES</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla nisi vel pulvinar condimentum. Nulla quis sollicitudin lectus. Quisque vel mauris eu neque aliquet cursus. Vivamus efficitur tortor at metus commodo, id luctus nibh tincidunt. Ut efficitur enim in tincidunt lobortis. Donec ac lobortis erat, at dapibus nunc.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla nisi vel pulvinar condimentum. Nulla quis sollicitudin lectus. Quisque vel mauris eu neque aliquet cursus. Vivamus efficitur tortor at metus commodo, id luctus nibh tincidunt. Ut efficitur enim in tincidunt lobortis. Donec ac lobortis erat, at dapibus nunc.</p>
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
