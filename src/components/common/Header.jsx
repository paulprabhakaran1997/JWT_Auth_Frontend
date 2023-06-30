import React from 'react'
import { useNavigate } from 'react-router';

const Header = () => {

    const navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem('tokenId');
        navigate('/login')
    }

    return (
        <div style={{ textAlign:'end',padding:'10px' }}>
            <p>Welcome {JSON.parse(localStorage.getItem('user'))}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Header