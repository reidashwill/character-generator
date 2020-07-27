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
        <label>Race </label>
        <select name='race'>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-Elf">Half-Elf</option>
          <option value="Halfling">Halfling</option>
          <option value="Half-Orc">Half-Orc</option>
          <option value="Human">Human</option>
          <option value="Tiefling">Tiefling</option>
        </select><br/>
        <label>Background </label>
        <select name='background'>
          <option value="Acolyte">Acolyte</option>
          <option value="Charlatan">Charlatan</option>
          <option value="Criminal">Criminal</option>
          <option value="Entertainer">Entertainer</option>
          <option value="Folk Hero">Folk Hero</option>
          <option value="Gladiator">Gladiator</option>
          <option value="Guild Merchant">Guild Merchant</option>
          <option value="Hermit">Hermit</option>
          <option value="Knight">Knight</option>
          <option value="Noble">Noble</option>
          <option value="Outlander">Outlander</option>
          <option value="Pirate">Pirate</option>
          <option value="Sage">Sage</option>
          <option value="Sailor">Sailor</option>
          <option value="Soldier">Soldier</option>
          <option value="Urchin">Urchin</option>       
        </select><br/>
        <label>Level </label>
        <select name='lvl'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>          
        </select><br/>
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