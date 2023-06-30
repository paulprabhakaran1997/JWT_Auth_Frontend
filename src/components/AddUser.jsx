import React, { useState } from 'react'
import apiInstance from '../baseApi/apiInstance';
import { Link } from 'react-router-dom';

const AddUser = () => {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleReset = () =>{
        setUserName('');
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async (e) => {
        console.log("Submitting.....")
        e.preventDefault();
        try {
            const response = await apiInstance.post("/signup", { username, email, password })
            console.log("Res = ", response.data);
            handleReset()
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h1>AddUser</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='name'
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
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
            <Link to={`/v${process.env.REACT_APP_VERSION}/product`}>Go To Products</Link>
        </div>
    )
}

export default AddUser