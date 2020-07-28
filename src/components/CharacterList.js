import React from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import Character from './Character'
import firebase from '../firebase';

function CharacterList(props){
  useFirestoreConnect([{collection: 'characters'}]);
  const characters = useSelector(state => state.firestore.ordered.characters);
  if(isLoaded(characters)){
    const {setSelectedCharacter} = props

    const user = firebase.auth().currentUser;
    console.log(user)
    
    return(
      <React.Fragment>
        {characters.map((character) => {
          return <Character
          whenCharacterClicked = {setSelectedCharacter}
          name={character.name}
          id={character.id}
          key={character.id}/>
        })}
      </React.Fragment>
    )
  }else{
    return(
      <React.Fragment>
        <h1>Hold onto your butts!</h1>
      </React.Fragment>
    )
  }  
}
export default CharacterList