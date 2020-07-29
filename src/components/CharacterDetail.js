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
      
        <div className='genStats flexTopRow'>
          <h1>Name: {character.name}</h1>
          <h3>Class: {character.characterClass}</h3>
          <h3>Race: {character.race}</h3>
          <h3>Alignment: {character.alignment} </h3>
          {/* <h3>Level: {character.lvl}</h3> */}
          <h3>Background: {character.background}</h3>
        </div>
        <div className='charSheet'>
        <div className='genStats flexCol'>
          <div>
            <h3>Skill Proficiencies:</h3>
            <h3>Acrobatics:</h3>
            <h3>Animal Handling:</h3>
            <h3>Arcana: </h3>
            <h3>Athletics: </h3>
            <h3>Deception: </h3>
            <h3>History: </h3>
            <h3>Insight: </h3>
            <h3>Intimidation:  </h3>
            <h3>Investigation: </h3>
            <h3>Medicine: </h3>
            <h3>Nature: </h3>
            <h3>Perception: </h3>
            <h3>Performance: </h3>
            <h3>Persuasion: </h3>
            <h3>Religion: </h3>
            <h3>Sleight of Hand: </h3>
            <h3>Stealth: </h3>
            <h3>Survival: </h3>
          </div>
          <div>
            <h3 className='hidden'>-</h3>
            <h3>{character.acrobatics}</h3>
            <h3>{character.animalHandling}</h3>
            <h3>{character.arcana}</h3>
            <h3>{character.athletics}</h3>
            <h3>{character.deception}</h3>
            <h3>{character.history}</h3>
            <h3>{character.insight}</h3>
            <h3>{character.intimidation} </h3>
            <h3>{character.investigation}</h3>
            <h3>{character.medicine}</h3>
            <h3>{character.nature}</h3>
            <h3>{character.perception}</h3>
            <h3>{character.performance}</h3>
            <h3>{character.persuasion}</h3>
            <h3>{character.religion}</h3>
            <h3>{character.sleightOfHand}</h3>
            <h3>{character.stealth}</h3>
            <h3>{character.survival}</h3>
          </div>  
        </div>
        <div className='genStats flexSubRow'>
        <div className='genStats flexSubRow'>
          <h3>Hit Points: {character.hp}</h3>
          <h3>Hit Die: {character.hitDie}</h3>
          <h3>Initiative: {character.initiative}</h3>
          <h3>Speed: {character.speed}</h3>
        </div>

        <div className='genStats flexSubRow'>
          <h3>Strength: {character.str}</h3>
          <h3>Dexterity: {character.dex}</h3>
          <h3>Constitution {character.con}</h3>
          <h3>Intelligence: {character.int}</h3>
          <h3>Wisdom: {character.wis}</h3>
          <h3>Charisma: {character.cha}</h3>
        </div>

        <div className='genStats flexSubRow'>
          <h3>Strength Modifier: {character.strMod}</h3>
          <h3>Dexterity Modifier: {character.dexMod}</h3>
          <h3>Constitution Modifier: {character.conMod}</h3>
          <h3>Intelligence Modifier: {character.intMod}</h3>
          <h3>Wisdom Modifier: {character.wisMod}</h3>
          <h3>Charisma Modifier: {character.chaMod}</h3>
        </div>
        
        

        <div className='genStats flexSubRow'>
          <h3>Physical Appearance:</h3>
          <p>{character.physicalApprearance}</p>
          <h3>Personality Traits:</h3>
          <p>{character.personalityTraits}</p>
          <h3>Bonds and Flaws:</h3>
          <p>{character.bondsFlaws}</p>
        </div>
      </div>  
      </div> 
        <button onClick={ () => handleDeletingCharacter(selectedCharacter)}>Delete Character</button>
       
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object
}

export default CharacterDetail