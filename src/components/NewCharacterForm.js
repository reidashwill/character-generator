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
    let acrobatics = false
    let animalHandling = false
    let arcana = false
    let athletics = false
    let deception = false
    let history = false
    let insight = false
    let intimidation = false
    let investigation = false
    let medicine = false
    let nature = false
    let perception = false
    let persuasion = false
    let religion = false
    let sleightOfHand = false
    let stealth = false
    let survival = false
    
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
      insight = true
      religion = 2
    }
    

    return firestore.collection('characters').add({
      name: event.target.name.value,
      race: race,
      characterClass: event.target.characterClass.value,
      lvl: parseInt(event.target.lvl.value),
      str: str,
      dex: dex,
      con: con,
      int: int,
      wis: wis,
      cha: cha,
      speed: speed,
      acrobatics: acrobatics,
      insight: insight,
      religion: religion
    });
      
  }
      

 return(
    <React.Fragment>
        formSubmissionHandler={addCharacterToFirestore}
        buttonText="Add Character" />
    </React.Fragment>
  );
}

NewCharacterForm.propTypes = {
  onNewCharacterCreation: PropTypes.func
}

export default NewCharacterForm