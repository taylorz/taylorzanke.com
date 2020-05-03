import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Header/Header';
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
      <Grid container className={`site-wrapper ${className} ${this.state.menuOpened ? "menu-opened" : "menu-closed"}`}>
        <Header onClick={() => this.toggleMenu()}/>
        <Menu/>
        {children}
      </Grid>
    );
  }
}

export default SiteWrapper;
