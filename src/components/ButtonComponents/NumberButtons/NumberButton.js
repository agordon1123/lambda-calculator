import React from "react";

const NumberButton = (props) => {
  return (
      <button onClick={() => props.setDisplay(props.number)} className='button'>{props.number}</button>
    );
};

export default NumberButton;