import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return(
    <React.Fragment>
      <div className='container'>
          <div>
            <form className='formFlex' onSubmit ={props.formSubmissionHandler}>
              <input type='text' name='name' placeholder='Character Name' /><br/>
              <p>Class </p>
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
              <p>Race </p>
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
              <p>Background </p>
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
                <option value="Sage">Sage</option>
                <option value="Sailor">Sailor</option>
                <option value="Soldier">Soldier</option>
                <option value="Urchin">Urchin</option>       
              </select><br/>
              <p>Alignment </p>
              <select name='alignment'>
                <option value="Lawful Good">Lawful Good</option>
                <option value="Neutral Good">Neutral Good</option>
                <option value="Chaotic Good">Chaotic Good</option>
                <option value="Lawful Neutral">Lawful Neutral</option>
                <option value="Neutral">Neutral</option>
                <option value="Chaotic Neutral">Chaotic Neutral</option>
                <option value="Lawful Evil">Lawful Evil</option>
                <option value="Neutral Evil">Neutral Evil</option>
                <option value="Chaotic Evil">Chaotic Evil</option>
                <option value="Unaligned">Unaligned</option>       
              </select><br/>
              {/* <p>Level</p>
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
              </select><br/> */}
              <p>Strength</p>
              <select name='str'>
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
              <p>Dexterity</p>
              <select name='dex'>
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
              <p>Constitution</p>
              <select name='con'>
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
              <p>Intelligence</p>
              <select name='int'>
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
              <p>Wisdom</p>
              <select name='wis'>
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
              <p>Charisma</p>
              <select name='cha'>
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
              {/* <input type='number' name='str' placeholder='Strength' />
              <input type='number' name='dex' placeholder='Dexterity' />
              <input type='number' name='con' placeholder='Constitution' />
              <input type='number' name='int' placeholder='Intelligence' />
              <input type='number' name='wis' placeholder='Wisdom' />
              <input type='number' name='cha' placeholder='Charisma' /> */}
              <p>Physical Appearance</p>
              <textarea rows='15' type='text' name='physicalAppearance' placeholder='Physical Apprearance' />
              <p>Personality Traits</p>
              <textarea type='text' name='personalityTraits' placeholder='Personality Traits' />
              <p>Bonds and Flaws</p>
              <textarea type='text' name='bondsFlaws' placeholder='Bonds and Flaws' />
              
              <button type='submit'>{props.buttonText}</button>
            </form>
          
          </div>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;