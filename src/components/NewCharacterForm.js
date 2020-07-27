import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewCharacterForm(props){
  const {setform, visibleForm} = props
  const firestore = useFirestore();

  function addCharacterToFirestore(event) {
    event.preventDefault();
    setform(!visibleForm);
    
    let race = event.target.race.value
    let background = event.target.background.value
    let str = parseInt(event.target.str.value)
    let dex = parseInt(event.target.str.value)
    let con = parseInt(event.target.str.value)
    let int = parseInt(event.target.str.value)
    let wis = parseInt(event.target.str.value)
    let cha = parseInt(event.target.str.value)
    let speed = 30

    // SKILL PROFICIENCIES ----------------------------------------------
    let acrobatics = 0
    let animalHandling = 0
    let arcana = 0
    let athletics = 0
    let deception = 0
    let history = 0
    let insight = 0
    let intimidation = 0
    let investigation = 0
    let medicine = 0
    let nature = 0
    let perception = 0
    let persuasion = 0
    let religion = 0
    let sleightOfHand = 0
    let stealth = 0
    let survival = 0

    function skillMod(rawScore){
      if(rawScore = 20){
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
    

    return firestore.collection('characters').add({
      name: event.target.name.value,
      race: race,
      characterClass: event.target.characterClass.value,
      lvl: parseInt(event.target.lvl.value),
      background: event.target.background.value,
      str: str,
      dex: dex,
      con: con,
      int: int,
      wis: wis,
      cha: cha,
      strMod: skillMod(str),
      dexMod: skillMod(dex),
      conMod: skillMod(con),
      intMod: skillMod(int),
      wisMod: skillMod(wis),
      chaMod: skillMod(cha),
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
      religion: religion,
      sleightOfHand: sleightOfHand,
      stealth: stealth,
      survival: survival
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