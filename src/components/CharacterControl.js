import React, {useState} from 'react';
import CharacterList from './CharacterList'
import firebase from 'firebase';
import { withFirestore, isLoaded } from 'react-redux-firebase';


function CharacterControl(){
  let currentlyVisibleState = null
  let buttonText = null
  const [editing, setEditing] = useState(false)
  const [selectedCharacterId, setSelectedCharacter] = useState(null)
  const [visibleForm, setForm] = useState(false);

  function returnToList(){
      setForm(!visibleForm);
    }
  

  {currentlyVisibleState = <CharacterList
    setSelectedCharacter={setSelectedCharacter}
    selectedCharacter={selectedCharacterId} />
    buttonText = "Add Character"                          
  }
  
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={ () => returnToList() }>{buttonText}</button>
    </React.Fragment>
  )
}

export default CharacterControl;