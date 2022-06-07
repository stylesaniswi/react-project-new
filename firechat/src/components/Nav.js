import React from 'react'
import {auth} from '../firebase.js'
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import SignOut from './SignOut.js';

function Nav(props) {
    const {text,status,photoURL} =props;
  return (
            <>

        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div className="container-fluid row">
    <div className='col-8'><a className="navbar-brand" href="#">AlfaSeirraChat</a></div>

    <div className="collapse navbar-collapse col-4 d-flex justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav  ">
      <a className="nav-link" href="#"><img src={photoURL} alt='' /> </a>
        <a className="nav-link" aria-current="page" href="#">Home</a>
        <a className="nav-link active" aria-current="page" href="#">{text}</a>
        <a className="nav-link" href="#">{status}</a>
        {
            text!=='Login' &&
            <>
                <SignOut />  
            </>
        }
         
      </div>
    </div>
  </div>
</nav>

</>
  )
}

export default Nav