import React, {useState, useEffect, useRef} from 'react';
import '../styles/chat.css'
import SignOut from './SignOut'
import { db, auth } from '../Firebase'
import SendMessage from './sendMessage';
import Message from './message';
import {collection, onSnapshot,query, orderBy, limit} from "firebase/firestore";

function Chat() {
    const [messages, setMessages] = useState([])
    const scroll = useRef()
    async function getMessages(){
        const q = query(collection(db, "messages"),orderBy("createdAt","desc"),limit(50));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const msgs = [];
            scroll.current.scrollIntoView({behavior: "smooth"})
            querySnapshot.forEach((doc) => {

                msgs.push(doc.data());
                
            });
            msgs.reverse()
            setMessages(msgs)
          });
    }
    useEffect(() => {
        getMessages()
        scroll.current.scrollIntoView({behavior: "smooth"})
    }, [])

    return (
        <div>
            <div className="container">
                <div className='chat-cont'>
                    <div className='signout-btn-cont'><SignOut/></div>
            <div className="chat">
                
                {messages.map(({ id, message, photoURL}) => (
                    <Message  class={`msg ${id === auth.currentUser.uid ? 'sent' : 'received'}`} img={photoURL} msg={message}/>
                    
                ))}
                <div ref={scroll}></div>
                {console.log(scroll)}
            </div><SendMessage scroll={scroll}/></div></div>
            
        </div>
    )
}

export default Chat
