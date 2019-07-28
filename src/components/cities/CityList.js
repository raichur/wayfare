import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeCurrentCity } from '../../store/actions/cityActions';

class CityList extends Component {

    changeCurrentCity = (cityid, userId) => {
        this.props.changeCurrentCity(cityid, userId);
    }

    render() {
        return (
            <ul className="cities">
                {this.props.cities ? this.props.cities.map(city => {
                    return (
                    <li key={city.id} className={this.props.currentcity === city.id ? "currentcity" : null}>
                        <Link to="/" onClick={() => this.changeCurrentCity(city.id, city.userid)}>
                            <h2>{city.name}</h2>
                        </Link>
                    </li>
                    )
                }) : null}
                <Link to='/'>+ Add City</Link>
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