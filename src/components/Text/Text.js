import React from 'react';
import './Text.scss';

const Text = ({
  children,
  large,
  center,
  bold,
}) => (
  <span 
    className={`
      text
      ${large && "large"}
      ${center && "center"}
      ${bold && "bold"}
    `}
  >
    {children}
  </span>
)

export default Text