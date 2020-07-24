import React, {useState} from 'react';
import CreateCharacterButton from './CreateCharacterButton'


function CharacterControl(){

  const [createButton, setCreateButton] = useState(true);
  const [visibleState, setVisibleState] = useState(<CreateCharacterButton/>)
  
  return(
    <React.Fragment>
      {visibleState}
    </React.Fragment>

  )
}

export default CharacterControl;