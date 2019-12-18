import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../components/Menu/Menu';
import './SiteWrapper.scss';

class SiteWrapper extends Component {
  state = {
    menuOpened: false,
  }
  toggleMenu() {
    this.setState({
      menuOpened: !this.state.menuOpened,
    });
  }
  render() {
    const { children, className, menuState } = this.props
    return (
      <Grid container className={`site-wrapper ${className} ${menuState}`}>
        <Menu onClick={() => this.toggleMenu()}/>
        {children}
      </Grid>
    );
  }
}

export default SiteWrapper;
