import React, { useEffect, useState, useRef } from 'react'
import { db , auth } from '../firebase'
import SendMessage from './SendMessage'
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import Members from './Members';

function Chat() {
    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot=>{
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])
  
    return (
    <>
        <div className='container-fluid chat '>
        <div className='act-mem '>
            <h1>Chat Freely</h1>
        </div>
        <div className='msgs'>
        {
            messages.map(({id,text,photoURL, uid})=>(
                <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                    <img src={photoURL} alt=''></img>
                    <p>{text}</p>
                </div>
            ))
        }
        
        </div>
        <SendMessage scroll={scroll} />
        <div ref={scroll}></div>
        
        </div>
        
    </>
  )
}

export default Chat