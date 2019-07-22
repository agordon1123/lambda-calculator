import React from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';

//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className='numbers'>
      {numbers.map(num => {return <NumberButton number={num} display={props.display} setDisplay={props.setDisplay} /> })}
    </div>
  );
};

export default Numbers;