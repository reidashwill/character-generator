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
        name: event.target.name.value,
        race: event.target.race.value,
        characterClass: event.target.characterClass.value,
        lvl: parseInt(event.target.lvl.value),
        str: parseInt(event.target.str.value),
        dex: parseInt(event.target.dex.value),
        con: parseInt(event.target.con.value),
        int: parseInt(event.target.int.value),
        wis: parseInt(event.target.wis.value),
        cha: parseInt(event.target.cha.value)
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