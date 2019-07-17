import React from "react";
import { specials } from '../../../data';
import SpecialButton from './SpecialButton';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state

  return (
    <div className='specials'>
      {specials.map(special => {return <SpecialButton special={special} display={props.display} setDisplay={props.setDisplay} /> })}
    </div>
  );
};

export default Specials;