import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Fragment.scss';

import Caption from '../Caption/Caption';

class Fragment extends Component {
  render() {
    const { className, fragmentImage, title, year, object, dimension } = this.props
    return (
      <>
        <div className={`fragment-container ${className}`}>
          <div className="fragment" style={{backgroundImage: `url(${fragmentImage})`}}></div>
        </div>
      </>
    );
  }
}

export default Fragment;
