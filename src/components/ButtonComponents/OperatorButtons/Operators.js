import React, { useState } from "react";
import { operators } from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operatorState.map(operator => {return <OperatorButton operator={operator} />})}
    </div>
  );
};

export default Operators;