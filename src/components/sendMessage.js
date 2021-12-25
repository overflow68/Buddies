import React, {useState} from 'react'
import {db,auth} from '../Firebase'
import {addDoc,collection, serverTimestamp} from 'firebase/firestore'
import '../styles/input.css'


function SendMessage({scroll}) {
    const [msg, setMsg] = useState("")
    async function sendMsg(e){
        if(msg !== "" && e.key==="Enter"){
        e.preventDefault()
        const {uid, photoURL} = auth.currentUser
        const docRef = await addDoc(collection(db, "messages"), {
            message: msg,
            id: uid,
            photoURL,
            createdAt: serverTimestamp()

          });
          setMsg("")}
          scroll.current.scrollIntoView({behavior: "smooth"})
        }
    
    return (
        <div className="send-message">
            <div className="input-style"><input placeholder="Type something..."  value={msg} onKeyPress={sendMsg} onChange={e => setMsg(e.target.value)} /></div>
        </div>
    )
}

export default SendMessage
