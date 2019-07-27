import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoutLinks = () => {
    return (
        <div className="links">
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </div>
    )
}

export default LogoutLinks;