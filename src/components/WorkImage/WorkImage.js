import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkImage.scss';

class WorkImage extends Component {
  render() {
    const { image, matte, full, dark, light, link, imageCount, workName } = this.props
    return (
      <>
        {link ?
          <a href={link}>
            <div className={`work-image has-link ${matte && "matte"} ${full && "full"} ${dark && "dark"} ${light && "light"}`}>
              <img className="image-item" src={image}/>
              <div className="image-info">
                <div className="image-work-name">{workName}</div>
                <div className="image-count">{imageCount} Images</div>
              </div>
            </div>
          </a>
          : (
          <div className={`work-image ${matte && "matte"} ${full && "full"} ${dark && "dark"} ${light && "light"}`}>
            <img className="image-item" src={image}/>
          </div>
        )}
      </>
    );
  }
}

export default WorkImage;
