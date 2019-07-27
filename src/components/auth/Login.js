import React, { Component } from 'react'

class Login extends Component {
    state = {

    }

    handleChange = (e) => {
        console.log(e);
    }

    handleSubmit = (e) => {
        console.log(e);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="email"s>Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login
