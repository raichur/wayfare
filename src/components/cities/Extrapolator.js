import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

class Extrapolator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfMonths: '1 month'
        }
    }

    changeCurrentCity = (e) => {
        this.setState({ numberOfMonths: e.value})
    }

    render() {
        let extrapolateList = [
            {value: '1 month', label: '1 month'},
            {value: '2 months', label: '2 months'},
            {value: '3 months', label: '3 months'},
            {value: '4 months', label: '4 months'},
            {value: '5 months', label: '5 months'},
            {value: '6 months', label: '6 months'},
            {value: '1 year', label: '1 year'},
            {value: '2 year', label: '2 year'}
        ];
        return (
            <ul className="cities extrapolator">
                { this.props.cities ?
                <Select 
                options={extrapolateList}
                classNamePrefix="select"
                isSearchable={true}
                onChange={this.changeCurrentCity}
                defaultValue={extrapolateList[0]}
                />
                : null}
            </ul>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        numberOfMonths: state.numberOfMonths
    }
}

export default connect(mapStateToProps, null)(Extrapolator);