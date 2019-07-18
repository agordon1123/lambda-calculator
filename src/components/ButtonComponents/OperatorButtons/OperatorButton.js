import React from "react";

const OperatorButton = (props) => {
  return (
    <button onClick={() => props.setDisplay(props.operator.char)} className='button'>{props.operator.char}</button>
  );
}

export default OperatorButton;
