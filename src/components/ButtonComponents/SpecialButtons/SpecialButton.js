import React from "react";
import { specials } from "./data.js"


const SpecialButton = () => {
  return (
    <button className='button'>
      {specials.map(num => {return num})}
    </button>
  );
};

export default SpecialButton;
