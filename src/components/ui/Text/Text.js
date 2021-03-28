import React from 'react';
import './Text.scss';

const Text = ({ children, ...props }) => {
  return (
    <span {...props} className="text">{children}</span>
  )
}

export default Text
