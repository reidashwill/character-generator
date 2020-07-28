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
      <h3>Alignment: {character.alignment} </h3>
      <h3>Level: {character.lvl}</h3>
      <h3>Background: {character.background}</h3>
      <h3>Hit Points: {character.hp}</h3>
      <h3>Hit Die: {character.hitDie}</h3>
      <h3>Initiative: {character.initiative}</h3>

      <h3>Strength: {character.str}</h3>
      <h3>Dexterity: {character.dex}</h3>
      <h3>Constitution {character.con}</h3>
      <h3>Intelligence: {character.int}</h3>
      <h3>Wisdom: {character.wis}</h3>
      <h3>Charisma: {character.cha}</h3>

      <h3>Strength Modifier: {character.strMod}</h3>
      <h3>Dexterity Modifier: {character.dexMod}</h3>
      <h3>Constitution Modifier: {character.conMod}</h3>
      <h3>Intelligence Modifier: {character.intMod}</h3>
      <h3>Wisdom Modifier: {character.wisMod}</h3>
      <h3>Charisma Modifier: {character.chaMod}</h3>

      <h3>Speed: {character.speed}</h3>

      <h3>Acrobatics: {character.acrobatics}</h3>
      <h3>Animal Handling: {character.animalHandling}</h3>
      <h3>Arcana: {character.arcana}</h3>
      <h3>Athletics: {character.athletics}</h3>
      <h3>Deception: {character.deception}</h3>
      <h3>History: {character.history}</h3>
      <h3>Insight: {character.insight}</h3>
      <h3>Intimidation: {character.intimidation} </h3>
      <h3>Investigation: {character.investigation}</h3>
      <h3>Medicine: {character.medicine}</h3>
      <h3>Nature: {character.nature}</h3>
      <h3>Perception: {character.perception}</h3>
      <h3>Performance: {character.performance}</h3>
      <h3>Persuasion: {character.persuasion}</h3>
      <h3>Religion: {character.religion}</h3>
      <h3>Sleight of Hand: {character.sleightOfHand}</h3>
      <h3>Stealth: {character.stealth}</h3>
      <h3>Survival: {character.survival}</h3>

      <h3>Physical Appearance:</h3>
      <p>{character.physicalApprearance}</p>
      <h3>Personality Traits:</h3>
      <p>{character.personalityTraits}</p>
      <h3>Bonds and Flaws:</h3>
      <p>{character.bondsFlaws}</p>
      
      
      <button onClick={ () => handleDeletingCharacter(selectedCharacter)}>Delete Character</button>
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object
}

export default CharacterDetail