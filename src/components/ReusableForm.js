import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit ={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Character Name' />
        <input
          type='text'
          name='characterClass'
          placeholder='Character Class' />
        <input
          type='text'
          name='race'
          placeholder='Character Race' />
        <input
          type='number'
          name='lvl'
          placeholder='Character Level' />
        <input
          type='number'
          name='str'
          placeholder='Strength' />
        <input
          type='number'
          name='dex'
          placeholder='Dexterity' />
        <input
          type='number'
          name='con'
          placeholder='Constitution' />
        <input
          type='number'
          name='int'
          placeholder='Intelligence' />
        <input
          type='number'
          name='wis'
          placeholder='Wisdom' />
        <input
          type='number'
          name='cha'
          placeholder='Charisma' />
          <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;