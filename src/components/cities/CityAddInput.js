import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCity } from '../../store/actions/cityActions';

class CityAddInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentInput: ''
        }
    }

    cityInputChange = (e) => {
        this.setState({currentInput: e.target.value});
    }    

    createCity = (e) => {
        e.preventDefault()
        this.props.createCity(this.state.currentInput);
    }
    
    render() {
        return (
            <>
            <ul className="cities">
                { this.props.cities ?
                <div className="addCityInput">
                    <input type="text" id="city" maxLength="50" placeholder="e.g. Austin" onChange={this.cityInputChange}/>
                </div>
                : null}
            </ul>
            <Link to='/' className="add submit" onClick={this.createCity}>Submit</Link>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCity: (city, userid) => dispatch(createCity(city, userid))
    }
}

export default connect(null, mapDispatchToProps)(CityAddInput);