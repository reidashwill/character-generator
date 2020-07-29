import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';
import firebase from '../firebase';

function NewCharacterForm(props){
  const {setform, visibleForm} = props
  const firestore = useFirestore();

  function addCharacterToFirestore(event) {
    event.preventDefault();
    setform(!visibleForm);
    const user = firebase.auth().currentUser;
    console.log(user)
    
    function skillMod(rawScore){
      console.log(rawScore)
      if(rawScore === 20){
        return 5
      }else if(rawScore >= 18 && rawScore <= 19){
        return 4
      }else if(rawScore >= 16 && rawScore <= 17){
        return 3
      }else if(rawScore >= 14 && rawScore <= 15){
        return 2
      }else if(rawScore >= 12 && rawScore <= 13){
        return 1
      }else if(rawScore >= 10 && rawScore <= 11){
        return 0
      }else if(rawScore >= 8 && rawScore <= 9){
        return -1
      }else if(rawScore >= 6 && rawScore <= 7){
        return -2
      }else if(rawScore >= 4 && rawScore <= 5){
        return -3
      }else if(rawScore >= 2 && rawScore <= 3){
        return -4
      }else{
        return -5
      }
    }
    let characterClass = event.target.characterClass.value
    let race = event.target.race.value
    let background = event.target.background.value
    let alignment = event.target.alignment.value
    let hitDie = 0
    let hp = 0
    
    let str = parseInt(event.target.str.value)
    let dex = parseInt(event.target.dex.value)
    let con = parseInt(event.target.con.value)
    let int = parseInt(event.target.int.value)
    let wis = parseInt(event.target.wis.value)
    let cha = parseInt(event.target.cha.value)
    let strMod = skillMod(str)
    let dexMod = skillMod(dex)
    let conMod = skillMod(con)
    let intMod = skillMod(int)
    let wisMod = skillMod(wis)
    let chaMod = skillMod(cha)
    let speed = 30

    // SKILL PROFICIENCIES ----------------------------------------------
    
    let acrobatics = dexMod
    let animalHandling = wisMod
    let arcana = intMod
    let athletics = strMod
    let deception = chaMod
    let history = intMod
    let insight = wisMod
    let intimidation = chaMod
    let investigation = intMod
    let medicine = wisMod
    let nature = intMod
    let perception = wisMod
    let persuasion = chaMod
    let performance = chaMod
    let religion = intMod
    let sleightOfHand = dexMod
    let stealth = dexMod
    let survival = wisMod
    
    if(race === 'Human'){
      str ++
      dex ++
      con ++
      int ++
      wis ++
      cha ++
    }else if(race === 'Dragonborn'){
      str += 2
      cha += 1
    }else if(race ==='Dwarf'){
      con += 2
      speed = 25
    }else if(race ==='Elf'){
      dex += 2
    }else if(race ==='Gnome'){
      int += 2
      speed = 25
    }else if(race ==='Half-Elf'){
      cha += 2
      // need to figure out adding the other two skills up by one based on user choice...  or make it random??
    }else if(race ==='Halfling'){
      dex += 2
      speed = 25
    }else if(race ==='Half-Orc'){
      str += 2
      con ++
    }else if(race ==='Tiefling'){
      int ++
      cha += 2
    }

    if (background === "Acolyte"){
      insight += 2
      religion += 2
    }else if (background === "Charlatan"){
      deception += 2
      sleightOfHand += 2
    }else if (background === "Criminal"){
      deception += 2
      stealth += 2
    }else if (background === "Entertainer"){
      acrobatics += 2
      performance += 2
    }else if (background === "Folk Hero"){
      animalHandling += 2
      survival += 2
    }else if (background === "Gladiator"){
      acrobatics += 2
      performance += 2
    }else if (background === "Guild Merchant"){
      insight += 2
      persuasion += 2
    }else if (background === "Hermit"){
      medicine += 2
      religion += 2
    }else if (background === "Knight"){
      athletics += 2
      religion+= 2
    }else if (background === "Noble"){
      history += 2
      persuasion += 2
    }else if (background === "Outlander"){
      athletics += 2
      survival += 2
    }else if (background === "Sage"){
      arcana += 2
      history += 2
    }else if (background === "Sailor"){
      athletics += 2
      perception += 2
    }else if (background === "Soldier"){
      athletics += 2
      intimidation += 2
    }else if (background === "Urchin"){
      sleightOfHand += 2
      stealth += 2
    }
// ADD SAVING THROW PROFICIENCIES TO EACH CLASS!! ----------------->
    if(characterClass ==='Barbarian'){
      hitDie = 12
      hp = (hitDie + conMod)
    }else if(characterClass ==='Bard'){
      hitDie = 8
      hp = (hitDie + conMod)
    }else if(characterClass ==='Cleric'){
      hitDie = 8
      hp = (hitDie + conMod)
    }else if(characterClass ==='Druid'){
      hitDie = 8
      hp = (hitDie + conMod)
    }else if(characterClass ==='Fighter'){
      hitDie = 10
      hp = (hitDie + conMod)
    }else if(characterClass ==='Monk'){
      hitDie = 8
      hp = (hitDie + conMod)
    }else if(characterClass ==='Paladin'){
      hitDie = 10
      hp = (hitDie + conMod)
    }else if(characterClass ==='Ranger'){
      hitDie = 10
      hp = (hitDie + conMod)
    }else if(characterClass ==='Rouge'){
      hitDie = 8
      hp = (hitDie + conMod)
    }else if(characterClass ==='Sorcerer'){
      hitDie = 6
      hp = (hitDie + conMod)
    }else if(characterClass ==='Warlock'){
      hitDie = 8
      hp = (hitDie + conMod)
    }else if(characterClass ==='Wizard'){
      hitDie = 6
      hp = (hitDie + conMod)
    }

    return firestore.collection('characters').add({
      name: event.target.name.value,
      race: race,
      characterClass: characterClass,
      // lvl: parseInt(event.target.lvl.value),
      background: background,
      alignment: alignment,
      hitDie: hitDie,
      initiative: dexMod,
      hp: hp,
      str: str,
      dex: dex,
      con: con,
      int: int,
      wis: wis,
      cha: cha,
      strMod: strMod,
      dexMod: dexMod,
      conMod: conMod,
      intMod: intMod,
      wisMod: wisMod,
      chaMod: chaMod,
      speed: speed,
      acrobatics: acrobatics,
      animalHandling: animalHandling,
      arcana: arcana,
      athletics: athletics,
      deception: deception,
      history: history,
      insight: insight,
      intimidation: intimidation,
      investigation: investigation,
      medicine: medicine,
      nature: nature,
      perception: perception,
      persuasion: persuasion,
      performance: performance,
      religion: religion,
      sleightOfHand: sleightOfHand,
      stealth: stealth,
      survival: survival,
      physicalApprearance: event.target.physicalAppearance.value,
      personalityTraits: event.target.personalityTraits.value,
      bondsFlaws: event.target.bondsFlaws.value,
      userEmail: user.email
    });
      
  }
      

 return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addCharacterToFirestore}
        buttonText="Add Character" />
    </React.Fragment>
  );
}

NewCharacterForm.propTypes = {
  onNewCharacterCreation: PropTypes.func
}

export default NewCharacterForm