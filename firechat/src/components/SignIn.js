import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {auth} from '../firebase.js'
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';


function SignIn() {
    function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

  return (
    <div className='signin' >
        <button  className="btn btn-info btn-lg btn-labeled" onClick={signInWithGoogle}>
        <span class="btn-label"><i className="fa fa-google"
             aria-hidden="true" 
              /></span>Sign in With Google</button>
    </div>
  )
}

export default SignIn 