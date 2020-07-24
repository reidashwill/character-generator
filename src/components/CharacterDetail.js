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
      <h1>Character Name: {character.name}</h1>
      {/* <LargeText>Race: {character.characterRace}</LargeText>
      <LargeText>Class: {character.characterClass}</LargeText>
      <LargeText>Level: {character.characterLvl}</LargeText>
      <MediumText>STR: {character.characterStr}</MediumText>
      <MediumText>DEX: {character.characterDex}</MediumText>
      <MediumText>CON: {character.characterCon}</MediumText>
      <MediumText>INT: {character.characterInt}</MediumText>
      <MediumText>WIS: {character.characterWis}</MediumText>
      <MediumText>CHA: {character.characterCha}</MediumText>
      <Button onClick={ () => setEditing(!editing)}>Edit Character</Button> */}
      <button onClick={ () => handleDeletingCharacter(selectedCharacter)}>Delete Character</button>
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object
}

export default CharacterDetail