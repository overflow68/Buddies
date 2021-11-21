import React, {useState, useEffect} from 'react';
import SignOut from './SignOut'
import { db, auth } from '../Firebase'
import SendMessage from './sendMessage';
import {collection, onSnapshot,query, orderBy, limit, getDocs} from "firebase/firestore";

function Chat() {
    const [messages, setMessages] = useState([])
    
    async function getMessages(){
        const q = query(collection(db, "messages"),orderBy("createdAt","desc"),limit(5));
        
        const unsubscribe =onSnapshot(q, (querySnapshot) => {
            const cities = [];
            querySnapshot.forEach((doc) => {

                cities.push(doc.data());
                
                console.log(querySnapshot)
            });
            cities.reverse()
            setMessages(cities)
          });
    }
    useEffect(() => {
        getMessages()

    }, [])

    return (
        <div>
            <SignOut/>
            <div className="msgs">
                {messages.map(({ id, message, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{message}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage/>
        </div>
    )
}

export default Chat
