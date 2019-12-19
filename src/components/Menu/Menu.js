import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header/Header';
import './Menu.scss';

import WRITING from '../../constants/writing/writing';
import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

class Menu extends Component {
  render() {
    const { className, onClick } = this.props
    return (
        <Grid item xs={12} className={`menu ${className}`}>
          <Header onClick={onClick} context="Menu" what="" toggler="Close"/>
        </Grid>
    );
  }
}

export default Menu;
