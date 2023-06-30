import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    console.log("Submitting.....")
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/login",{email , password})
      console.log("Res = ",response.data);
      if(response){
        localStorage.setItem('tokenId' , JSON.stringify(response.data.token));
        localStorage.setItem('user' , JSON.stringify(response.data.username));
        navigate(`/v${process.env.REACT_APP_VERSION}`)
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="text"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login