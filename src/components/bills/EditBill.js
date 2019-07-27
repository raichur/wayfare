import React, { Component } from 'react';

class EditBill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            name: '',
            description: '',
            cost: 0,
            color: '#000000'
        }
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
                <h2>Edit Bill</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="name">Name {this.state.id}</label>
                        <input type="text" id="name"/>
                    </div>
                    <div className="input">
                        <label htmlFor="description">Description</label>
                        <textarea id="description"/>
                    </div>
                    <div className="input">
                        <label htmlFor="cost">Cost</label>
                        <input type="number" id="cost"/>
                    </div>
                    <div className="input">
                        <label htmlFor="color">Color</label>
                        <input type="color" id="color"/>
                    </div>
                    <button type="submit">Submit Changes</button>
                </form>
            </div>
        )
    }
}

export default EditBill;