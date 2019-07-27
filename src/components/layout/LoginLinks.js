import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginLinks = () => {
    return (
        <div className="links">
            <li><NavLink to='/account'>JR</NavLink></li>
            <li><NavLink to='/logout'>Logout</NavLink></li>
        </div>
    )
}

export default LoginLinks;