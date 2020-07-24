import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit ={props.formSubmissionHandler}>
        <input type='text' name='name' placeholder='Character Name' /><br/>
        <label>Class </label>
        <select name='characterClass'>
          <option value="Barbarian">Barbarian</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Fighter">Fighter</option>
          <option value="Monk">Monk</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Rouge">Rouge</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Wizard">Wizard</option>
        </select><br/>
        <input type='text' name='race' placeholder='Character Race' />
        <input type='number' name='lvl' placeholder='Character Level' />
        <input type='number' name='str' placeholder='Strength' />
        <input type='number' name='dex' placeholder='Dexterity' />
        <input type='number' name='con' placeholder='Constitution' />
        <input type='number' name='int' placeholder='Intelligence' />
        <input type='number' name='wis' placeholder='Wisdom' />
        <input type='number' name='cha' placeholder='Charisma' />

        
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