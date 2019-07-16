import React from "react";

const NumberButton = (props) => {
  const buttonContent = props;
  return (
      <button className='button'>{buttonContent}</button>
    );
};

export default NumberButton;