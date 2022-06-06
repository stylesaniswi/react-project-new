import React, { useState } from 'react'
import {db,auth} from '../firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
            <div className="sendMsg">
            <input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' onChange={(e)=> setMsg(e.target.value)} />
            <button style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type='submit' onClick={sendMessage}>Send</button>
            </div>
        </form>
    </div>
  )
}

export default SendMessage