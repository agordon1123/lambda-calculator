import React from "react";
import { numbers } from "./data"

const NumberButton = () => {
  return (
    <button className='button'>
      {numbers.map(num => {return num})}
    </button>
  );
};

export default NumberButton;