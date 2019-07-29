import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCity } from '../../store/actions/cityActions';
import Creatable from 'react-select/async-creatable';
import axios from 'axios'

class CityAddInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentInput: ''
        }
    }

    cityInputChange = (e) => {
        this.setState({currentInput: e.label});
        console.log(this.state)
    }    

    checkForEnter = (e) => {
        if (e.key === 'Enter') {
            this.createCity(e);
          }
    }

    getCities = (searchTerm) => {
        return axios.get(`https://api.teleport.org/api/cities/?search=${searchTerm}`)
        .then(res => {
            return (res.data._embedded["city:search-results"].map(city => {return {label: city.matching_full_name, value: city.matching_full_name} }))
        });
    }

    createCity = (e) => {
        e.preventDefault()
        this.props.createCity(this.state.currentInput);
    }
    
    render() {
        return (
            <>
             <ul className="cities addCity">
                 { this.props.cities ?
                <>
                {/* <div className="addCityInput">
                    <input type="text" id="city" maxLength="50" placeholder="e.g. Austin" onKeyDown={this.checkForEnter} onChange={this.cityInputChange}/>
                </div> */}
                <Creatable
                name="city"
                autoFocus="true"
                placeholder="e.g. Austin, Texas"
                valueKey="id"
                allowCreateWhileLoading="true"
                createOptionPosition="first"
                classNamePrefix="select"
                loadOptions={this.getCities.bind(this)}
                onChange={this.cityInputChange}
                />
                </>
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