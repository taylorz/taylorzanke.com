import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkImage.scss';

class WorkImage extends Component {
  render() {
    const { image, matte, dark, link } = this.props
    return (
      <>
        {link ?
          <a href={link}>
            <div className={`work-image has-link ${matte && "matte"} ${dark && "dark"}`}>
              <img className="image-item" src={image}/>
            </div>
          </a>
          : (
          <div className={`work-image ${matte && "matte"} ${dark && "dark"}`}>
            <img className="image-item" src={image}/>
          </div>
        )}
      </>
    );
  }
}

export default WorkImage;
