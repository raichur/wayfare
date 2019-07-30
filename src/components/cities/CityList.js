import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCurrentCity } from '../../store/actions/cityActions';
import Select from 'react-select';

class CityList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchable: true
        }
    }

    changeCurrentCity = (e) => {
        this.props.changeCurrentCity(e.value);
    }
    
    render() {

        if (window.innerWidth <= 700) {
            this.state.searchable = false;
        }

        let cityList = [];
        if (this.props.cities) {
            this.props.cities.map(city => {
                return cityList.push({ value: city.id, label: city.name})
            })
        }
        return (
            <ul className="cities selectCity">
                { this.props.cities ?
                <Select 
                options={cityList}
                classNamePrefix="select"
                blurResetsInput={false}
                isSearchable={this.state.searchable}
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