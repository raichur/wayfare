import React, { Component } from 'react'

class editAccount extends Component {
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
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Edit account</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="income">Monthly Income</label>
                        <input type="number" id="income" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">New Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="conf-password">Confirm New Password</label>
                        <input type="password" id="conf-password" onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        )
    }
}

export default editAccount
