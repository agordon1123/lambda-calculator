import React from "react";

const OperatorButton = (props) => {
  const buttonContent = props;
  return (
    <button className='button'>{buttonContent}</button>
  );
}

export default OperatorButton;
