import React from 'react';
import { NavLink } from 'react-router-dom';

const LogoutLinks = () => {
    return (
        <ul>
            <li><NavLink to='/'>Signup</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    )
}

export default LogoutLinks;