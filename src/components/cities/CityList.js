import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCurrentCity } from '../../store/actions/cityActions';
import Select from 'react-select';

class CityList extends Component {

    changeCurrentCity = (e) => {
        this.props.changeCurrentCity(e.value);
    }
    
    render() {
        let cityList = [];
        if (this.props.cities) {
            this.props.cities.map(city => {
                return cityList.push({ value: city.id, label: city.name})
            })
        }
        return (
            <ul className="cities">
                { this.props.cities ?
                <Select 
                options={cityList}
                classNamePrefix="select"
                isSearchable={true}
                onChange={this.changeCurrentCity}
                defaultValue={cityList.filter(option => option.value === this.props.currentcity)}
                />
                : null}
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentCity: (city, userid) => dispatch(changeCurrentCity(city, userid))
    }
}

export default connect(null, mapDispatchToProps)(CityList);