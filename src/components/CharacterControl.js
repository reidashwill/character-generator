import React, {useState} from 'react';
import CharacterList from './CharacterList'
import NewCharacterForm from './NewCharacterForm'
import { withFirestore, isLoaded } from 'react-redux-firebase';
import firebase from '../firebase';


function CharacterControl(){
  let currentlyVisibleState = null
  let buttonText = null
  const [editing, setEditing] = useState(false)
  const [selectedCharacterId, setSelectedCharacter] = useState(null)
  const [visibleForm, setForm] = useState(false);

  function returnToList(){
      setForm(!visibleForm);
    }

  if(visibleForm === true){
    currentlyVisibleState = <NewCharacterForm setform={setForm} visibleForm={visibleForm} />
    buttonText= "return to character list"
  }else{
    currentlyVisibleState = <CharacterList/>
    buttonText = "Create New Character"
  }
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={ () => returnToList() }>{buttonText}</button>
    </React.Fragment>
  )
}

export default withFirestore(CharacterControl);