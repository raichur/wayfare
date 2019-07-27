import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBill } from '../../store/actions/billActions';

class AddBill extends Component {
    state = {
        id: 1,
        cityid: 1,
        name: '',
        description: '',
        cost: 0,
        color: '#000000'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createBill(this.state);
    }

    render() {
        return (
            <div>
                <h2>Add Bill</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Rent" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="2 bedroom place in downtown Austin" rows="3" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="cost">Cost</label>
                        <input type="number" id="cost" placeholder="1400" onChange={this.handleChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="color">Color</label>
                        <input type="color" id="color" onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Add Bill</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBill: (bill) => dispatch(createBill(bill))
    }
}

export default connect(null, mapDispatchToProps)(AddBill);
