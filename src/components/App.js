import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'firebase/auth';
import firebase from '../firebase';

import Header from './Header'
import CharacterControl from './CharacterControl'
import Signin from './Signin';

function App() {
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var email = user.email;
    var uid = user.uid
    console.log(email)
    console.log (uid)
  } else {
  }
  })
  return (
    <Router>
      <Header />
      <Switch>
      <Route path='/signin'>
          <Signin />
      </Route>
      <Route path='/'>
        <CharacterControl />
      </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
