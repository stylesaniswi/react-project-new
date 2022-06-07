import React, { useEffect, useState} from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Members() {
    
    const [user, setUsers] = useState([])

  return (
    <div>
        {user.map(({photoURL,uid})=>{
            <div>
                <img src={photoURL} alt=''></img>

            </div>
        })}
    </div>
  )
}

export default Members