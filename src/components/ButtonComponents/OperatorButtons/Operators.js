import React, { useState } from "react";
import { operators } from './data';
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorState, setOperatorState] = useState(operators)
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(str => { <OperatorButton buttonContent={str} />})}
    </div>
  );
};

export default Operators;