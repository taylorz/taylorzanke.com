import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkExcerpt.scss'

class WorkExcerpt extends Component {
  render() {
    const {
      children,
      className,
      title,
      publication,
      datePublished,
      statement,
      excerpt,
      marginNoteFirst,
      marginNoteSecond,
      marginNoteThird
    } = this.props
    return (
      <div className={`work-excerpt ${className}`}>
        <Grid container className="work-excerpt-wrapper">
          <Grid item md={12} className="excerpt-titles">
            <div className="titles-title">{title}</div>
            <div className="titles-published">{publication} • <span>{datePublished}</span></div>
          </Grid>
          <Grid item md={6} className="excerpt-linkto"></Grid>
          <Grid item md={12} className="excerpt-writing">
            <Grid container className="excerpt-writing-wrapper" justify="center" alignItems="center">
              <Grid item md={12} lg={7} className="writing-copy">
                {excerpt}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} lg={3} className="excerpt-context">
            <div>{statement}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default WorkExcerpt;
