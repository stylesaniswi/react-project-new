import React from 'react'
import {auth} from '../firebase.js'
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';


function SignOut() {
  return (
    <>
        <div>
          <div className='header'>
          <button type="button" className="btn btn-danger btn-sm mt-1" onClick={()=>auth.signOut()}>Sign Out</button>
          </div>
          </div>
        
    </>
  )
}

export default SignOut