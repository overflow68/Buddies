import React, {useState} from 'react'
import {db,auth} from '../Firebase'
import {addDoc,collection, serverTimestamp} from 'firebase/firestore'


function SendMessage() {
    const [msg, setMsg] = useState("")
    async function sendMsg(e){
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser
        const docRef = await addDoc(collection(db, "messages"), {
            message: msg,
            id: uid,
            photoURL,
            createdAt: serverTimestamp()

          });
    }
    return (
        <div>
            <input value={msg} onChange={e => setMsg(e.target.value)} />
            <button onClick={sendMsg}>Send Message</button>
        </div>
    )
}

export default SendMessage
