import React from 'react';

const Text = ({ children, ...props }) => {
  return (
    <span {...props}>{children}</span>
  )
}

export default Text
