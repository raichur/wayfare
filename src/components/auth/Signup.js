import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions';

class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        income: 0
    }

    handleChange = (e) => {
        if (e.target.id === "income") {
            this.setState({
                income: Number(e.target.value)
            })
        } else {
            this.setState({
                [e.target.id]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h2>Signup</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" required onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" required onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="income">Monthly Income ($)</label>
                        <input type="number" id="income" required onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Create Account</button>
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
