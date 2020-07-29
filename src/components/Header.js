import React from 'react';
import { Link } from "react-router-dom";
import 'firebase/auth';
import firebase from '../firebase';

function Header(){
  return (
    <React.Fragment>
      <div className='flexTopRow'>
        <h1 className="header bungee">D&D CHARACTER VAULT</h1>
      </div>
      <div className='flexTopRow'>
        <Link className='bungee navigation' to="/">Home</Link>
        <Link className='bungee navigation' to="/signin">Account</Link>
      </div>
    </React.Fragment>
  );
}
export default Header
