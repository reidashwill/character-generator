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
    return firestore.collection('characters').add({
        characterName: event.target.name.value,
        characterRace: event.target.race.value,
        characterClass: event.target.characterClass.value,
        characterLvl: parseInt(event.target.lvl.value),
        characterStr: parseInt(event.target.str.value),
        characterDex: parseInt(event.target.dex.value),
        characterCon: parseInt(event.target.con.value),
        characterInt: parseInt(event.target.int.value),
        characterWis: parseInt(event.target.wis.value),
        characterCha: parseInt(event.target.cha.value)
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