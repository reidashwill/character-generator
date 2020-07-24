import React from 'react';

function Character(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCharacterClicked(props.id)}>
        <h1>{props.name}</h1>
      </div>
    </React.Fragment>
  )
}

export default Character