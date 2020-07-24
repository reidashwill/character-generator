import React from 'react';

function CreateCharacterButton(){
  return(
    <form>
      <input
        type='text'
        name='name'
        placeholder='Name' />
        <button type='submit'>CreateCharacter</button>
    </form>
  )
}
export default CreateCharacterButton