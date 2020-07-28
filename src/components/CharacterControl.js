import React, {useState} from 'react';
import CharacterList from './CharacterList'
import NewCharacterForm from './NewCharacterForm'
import CharacterDetail from './CharacterDetail'
import { withFirestore } from 'react-redux-firebase';
import firebase from '../firebase';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function CharacterControl(){
  let currentlyVisibleState = null
  let buttonText = null
  // const [editing, setEditing] = useState(false)
  const [selectedCharacterId, setSelectedCharacter] = useState(null)
  const [visibleForm, setForm] = useState(false);

  function returnToList(){
    if (selectedCharacterId !== null) {
      setSelectedCharacter(null);
      setForm(false);
    } else {
      setForm(!visibleForm);
    }
  }
  const user = firebase.auth().currentUser;
  console.log(user)
  
  if (user) {

    if(selectedCharacterId !==null){
      currentlyVisibleState = <CharacterDetail setSelectedCharacter = {setSelectedCharacter} selectedCharacter = {selectedCharacterId} />
      buttonText = 'Return to character list'
    }else if(visibleForm === true){
      currentlyVisibleState = <NewCharacterForm setform={setForm} visibleForm={visibleForm} />
      buttonText= "return to character list"
    }else{
      currentlyVisibleState = <CharacterList setSelectedCharacter={setSelectedCharacter} selectedCharacter={selectedCharacterId}/>
      buttonText = "Create New Character"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={ () => returnToList() }>{buttonText}</button>
      </React.Fragment>
    )
  } else {
    return(
      <p>Please sign in</p>

    )
  }
}

export default withFirestore(CharacterControl);