import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {AiFillLock} from 'react-icons/ai'
function SignIn() {
    function login(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
       
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
       
      }).catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
       
        const email = error.email;
       
        const credential = GoogleAuthProvider.credentialFromError(error);
       
      });
      }
    return (
        <div className="signin">
            <p className="info">SIGN IN TO ACCESS CHAT</p> 
            <div><AiFillLock className='locker' size="300" color="rgb(180, 89, 89)"></AiFillLock></div>
            <button className="signin-btn" onClick={login}>Sign in with Google</button>
            
        </div>
    )
}

export default SignIn
