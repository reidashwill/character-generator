import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestore, useFirestoreConnect} from 'react-redux-firebase';
import 'firebase/firestore';

function CharacterDetail(props) {
  const { setSelectedCharacter, selectedCharacter} = props
  const firestore = useFirestore();
  useFirestoreConnect([{ collection: 'characters', doc: selectedCharacter }]);

  const handleDeletingCharacter = (selectedCharacter) => {
    firestore.delete({collection:
    'characters',
    doc: selectedCharacter});
    setSelectedCharacter(null)
  }
  
  const character = useSelector(
    ({ firestore: { data } }) => data.characters && data.characters[selectedCharacter]
  ) 
  return ( 
    <React.Fragment>
      <h1>Name: {character.name}</h1>
      <h3>Class: {character.characterClass}</h3>
      <h3>Race: {character.race}</h3>
      <h3>Strength: {character.str}</h3>
      <h3>Dexterity: {character.dex}</h3>
      <h3>Constitution {character.con}</h3>
      <h3>Intelligence: {character.int}</h3>
      <h3>Wisdom: {character.wis}</h3>
      <h3>Charisma: {character.cha}</h3>
      <button onClick={ () => handleDeletingCharacter(selectedCharacter)}>Delete Character</button>
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object
}

export default CharacterDetail