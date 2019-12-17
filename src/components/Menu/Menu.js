import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Menu.scss';

import WRITING from '../../constants/writing/writing';
import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

class Menu extends Component {
  render() {
    const { className, onClick } = this.props
    return (
        <Grid item xs={12} className={`menu ${className}`}>
          <div className="menu-header">
            <div className="menu-title">Information</div>
            <div className="menu-what">Something like Navigation, Works, Texts, Contact.</div>
            <div className="menu-toggler" onClick={onClick}>Close</div>
          </div>
        </Grid>
    );
  }
}

export default Menu;
