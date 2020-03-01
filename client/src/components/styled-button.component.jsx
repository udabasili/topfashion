import React from 'react';

const StyledButton = ({children, ...otherProps}) => (
  <button
    className='styled-button' {...otherProps}>
      {children}
  </button>
);

export default StyledButton;
