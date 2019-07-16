import React from "react";


const SpecialButton = (props) => {
  const buttonContent = props;
  return (
    <button className='button'>{buttonContent}</button>
    );
};

export default SpecialButton;
