import React, { useState } from 'react'
import {db,auth} from '../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

function SendMessage({scroll}) {
    const [msg ,setMsg] = useState('');
    
    async function sendMessage(e){
        e.preventDefault()
        const {uid,photoURL} = auth.currentUser

        await db.collection('messages').add({
            text:msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg(' ')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
  return (
    <div>
        
        <form>
        <div className="sendMsg row">
                <input  className="col-9 " placeholder='Message...' onChange={(e)=> setMsg(e.target.value)} />
                <button className="col-2 btn btn-primary btn-lg "   type='submit' onClick={sendMessage}>
                    <i className="fa fa-send "aria-hidden="true"/>
                    <span>Send</span></button>
            
        </div>
        </form>
    </div>
  )
}

export default SendMessage