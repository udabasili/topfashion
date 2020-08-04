import React from 'react';

const StyledButton = ({children, ...otherProps}) => (
  <button
    className='custom-button' {...otherProps}>
      {children}
  </button>
);

export default StyledButton;
