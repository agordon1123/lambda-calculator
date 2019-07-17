import React from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div className='operators'>
      {operators.map(operator => {return <OperatorButton operator={operator} display={props.display} setDisplay={props.setDisplay} />})}
    </div>
  );
};

export default Operators;