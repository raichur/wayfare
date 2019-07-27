import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginLinks = () => {
    return (
        <div className="links">
            <li><NavLink to='/logout'>Logout</NavLink></li>
            <li><NavLink to='/account' className="account">JR</NavLink></li>
        </div>
    )
}

export default LoginLinks;