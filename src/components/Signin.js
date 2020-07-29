import React, {useState} from 'react';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';


function Signin(){

  const [redirect, setRedirect] = useState(null)

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log('successfully signed up');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      setRedirect(< Redirect to = '/' />)
    }).catch(function(error){
      console.log(error.message)
    });
  }

  function doSignOut(){
    firebase.auth().signOut().then(function() {
      console.log('Successfully signed out');
    }).catch(function(error){
      console.log(error.message);
    });
  }



  return (

    <React.Fragment>
      {redirect}
      <div className='accountFields'>
        {/* <h1>Sign Up</h1> */}
      
        <form onSubmit={doSignUp}>
          <input
            type='text'
            name='email'
            placeholder='Email'/>
          <input
            type='password'
            name='password'
            placeholder='Password' />
            <button type='submit'>Sign Up</button>
        </form>
      </div>

      <div className='accountFields'>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='email'
          placeholder='Email' />
        <input
        type='password'
        name='password'
        placeholder='Password' />
        <button type='submit'>Sign In</button>
      </form>
      </div>
      <div className='accountFields'>
      <button onClick={doSignOut}>Sign Out</button>
      </div>
    </React.Fragment>
  );
  
}

export default Signin;
