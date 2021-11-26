import React, {useState, useEffect} from 'react';
import '../styles/chat.css'
import SignOut from './SignOut'
import { db, auth } from '../Firebase'
import SendMessage from './sendMessage';
import Message from './message';
import {collection, onSnapshot,query, orderBy, limit} from "firebase/firestore";

function Chat() {
    const [messages, setMessages] = useState([])
    
    async function getMessages(){
        const q = query(collection(db, "messages"),orderBy("createdAt","desc"),limit(7));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const msgs = [];
            querySnapshot.forEach((doc) => {

                msgs.push(doc.data());
                
            });
            msgs.reverse()
            setMessages(msgs)
          });
    }
    useEffect(() => {
        getMessages()

    }, [])

    return (
        <div>
            <SignOut/>
            <div className="chat">
                {messages.map(({ id, message, photoURL}) => (
                    <Message  class={`msg ${id === auth.currentUser.uid ? 'sent' : 'received'}`} img={photoURL} msg={message}/>
                    
                ))}
                <SendMessage/>
            </div>
            
        </div>
    )
}

export default Chat
