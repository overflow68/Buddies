import React from 'react'
import {auth} from '../Firebase.js'
import '../styles/signout.css'
function SignOut() {
    return (
        <div>
            <button className="signout" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut
