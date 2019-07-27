import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginLinks = () => {
    return (
        <ul>
            <li><NavLink to='/'>JR</NavLink></li>
            <li><NavLink to='/'>Logout</NavLink></li>
        </ul>
    )
}

export default LoginLinks;