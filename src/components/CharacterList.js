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
    console.log(user.email)

    return(
      <React.Fragment>
        <div className="charSheet">
          <div className="splash">
            <p>We believe that one of the biggest barriers to entry for new Dungeons and Dragons players is the character creation process.  Our response to this was to make a free and easy to use tool to create your own characters easily!  All you have to do is pick and Name, Class, Race, background, and then roll the die a few times!  We'll take care of the rest.</p>
          </div>
        </div>
        <div className="container">
          {characters.map((character) => {
            if(character.userEmail === user.email){
              return <Character
              whenCharacterClicked = {setSelectedCharacter}
              name={character.name}
              id={character.id}
              key={character.id}/>
            }
          })}
        </div>
      </React.Fragment>
    )
  }else{
    return(
      <React.Fragment>
        {/* <h1>Gathering the Heroes</h1> */}
      </React.Fragment>
    )
  }  
}
export default CharacterList