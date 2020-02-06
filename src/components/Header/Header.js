import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Header.scss';

class Header extends Component {
  render() {
    const { onClick, context, close, contextLink, workDetail, light } = this.props
    return (
      <div className={`header-container ${light && "light"}`}>
        <Grid container className="header-contents">
          <Grid item xs={12} md={6} className="header-item name">
            <a href={contextLink}>{context}</a>
          </Grid>
          <Grid item xs={12} md={5} className="header-item detail">
            <span className="detail-copy">{workDetail}</span>
          </Grid>
          {/*<Grid item xs={4} md={5} className="header-item menu-toggler"><span onClick={onClick}>{close ? "Close" : "Menu"}</span></Grid>*/}
        </Grid>
      </div>
    );
  }
}

export default Header;
