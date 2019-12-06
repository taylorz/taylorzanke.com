import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Menu.scss';
import WritingItem from '../../components/WritingItem/WritingItem';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import FragmentItem from '../../components/FragmentItem/FragmentItem';

import WRITING from '../../constants/writing/writing';
import WORKS from '../../constants/works/works';
import FRAGMENTS from '../../constants/fragments/fragments';

class Menu extends Component {
  render() {
    const { className, onClick } = this.props
    return (
        <Grid item xs={12} className={`menu ${className}`}>
          <div className="menu-header" onClick={onClick}>
            <div className="menu-title">Site Map</div>
            <div className="menu-what">Works, texts, contact.</div>
            <div className="menu-toggler">Close</div>
          </div>
        </Grid>
    );
  }
}

export default Menu;
