import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';

const LoginLinks = (props) => {
    return (
        <div className="links">
            <li><Link to='/login' onClick={props.logout}>Logout</Link></li>
            <li><NavLink to='/account' className="account">JR</NavLink></li>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(LoginLinks);