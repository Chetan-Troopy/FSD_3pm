import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function SignUp() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signUp} = useAuth();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await signUp(email, password)
            alert("User Registered!")
        } catch (err) {
            alert(err.message)
            
        }
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input type="email" placeholder='Type Email Here' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Type Password Here' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Sign Up</button>
        </form>

    </>
  )
}

export default SignUp