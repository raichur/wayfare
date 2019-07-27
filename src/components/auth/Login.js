import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Login</button>
                    <div className="error">
                        { authError ? <p>{authError}</p> : null }
                    </div>  
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (creds) => dispatch(login(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
