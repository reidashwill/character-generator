import React, {useState} from 'react';
import CreateCharacter from './CreateCharacter'



function CharacterControl(){

  const [createButton, setCreateButton] = useState(true);
  const [visibleState, setVisibleState] = useState(<CreateCharacter/>)
  
  return(
    <React.Fragment>
      {visibleState}
    </React.Fragment>

  )
}

export default CharacterControl;