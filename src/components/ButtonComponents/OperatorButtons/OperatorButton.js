import React from "react";
import { operators } from "./data.js"

const OperatorButton = () => {
  return (
    <button className='button'>
      {operators.map(op => {return op})}
    </button>
  );
};

export default OperatorButton;
