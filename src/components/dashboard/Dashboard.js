import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BillList from '../bills/BillList';
import CityList from '../cities/CityList';
import CityAddInput from '../cities/CityAddInput';
import CityData from '../cities/getCityCostData';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Select from 'react-select';
import { deleteCity } from '../../store/actions/cityActions';
import { Doughnut, defaults } from 'react-chartjs-2';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddCity: false,
            numberOfMonths: '1 month',
            currentCityName: '',
            discretionary: 0,
            discMultiplier: 1,
            positive: true, 
            totalCost: 0,
            toggleAddCity() {
                this.setState({
                    showAddCity: !this.state.showAddCity
                })
            }
        }
    }

    changeCurrentCity = (e) => {
        this.setState({ numberOfMonths: e.value});
    }

    deleteCityListener = (e) => {
        if (window.confirm('Are you sure you want to delete this city?')) {
            this.props.deleteCity(e.target);
        }
    }

    extrapolate = (e) => {
        this.setState({discMultiplier: e.value, numberOfMonths: e.label});
        console.log(this.state.discMultiplier, this.state.discretionary);
    }

    getDiscretionary = (bills, profile) => {
        /*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
        Array.prototype.sum = function (prop) {
            var total = 0
            for ( var i = 0, _len = this.length; i < _len; i++ ) {
                if (this[i].cityid === profile.currentcity) {
                    total += Number(this[i][prop])
                }
            }
            return total
        }
        
        this.state.totalCost = bills.sum('cost')
        this.state.discretionary = (profile.income - this.state.totalCost) * this.state.discMultiplier;
        if (this.state.discretionary <= 100) {
            this.state.positive = false;
        } else {
            this.state.positive = true;
        }
    }

    render() {
        
        // Bills and calculator
        const { cities, auth, profile, bills } = this.props;
        
        if (!auth.uid) {
            return <Redirect to='/login' />
        }
        
        if (cities) {
            this.state.currentCityName = cities.find(function(city) {return city.id === profile.currentcity}).name;
        }
        
        if (bills && profile) { 
            this.getDiscretionary(bills, profile)
        }

        // Chart Stuff
        let chartLabels = [];
        let chartTotals = [];
        let chartColors = [];
        for (var bill in bills) {
            if(bills[bill].cityid === profile.currentcity) {
                chartLabels.push(bills[bill].name)
                chartTotals.push(bills[bill].cost)
                chartColors.push(bills[bill].color)
            }
        }
        let chartData = {
            labels: chartLabels,
            legend: {
                display: false,
            },
            datasets: [{
                label: 'Bills',
                data: chartTotals,
                backgroundColor: chartColors
            }]      
        };
        let chartOptions = {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 1,
            tooltips: {
                cornerRadius: 0,
                xPadding: 10,
                yPadding: 10,
                caretPadding: 10,
                callbacks: {
                    label: (tooltipItem, data) => {
                        return ` ${data.labels[tooltipItem.index]}: $${data.datasets[0].data[tooltipItem.index]}`
                    }
                }
            },
            legend: {
                display: false
            },
            animation: {
                duration: 300
            }
        };
        let extrapolateList = [
            {value: '1', label: '1 month'},
            {value: '2', label: '2 months'},
            {value: '3', label: '3 months'},
            {value: '4', label: '4 months'},
            {value: '5', label: '5 months'},
            {value: '6', label: '6 months'},
            {value: '12', label: '1 year'},
            {value: '24', label: '2 years'}
        ];
        
        defaults.global.defaultFontFamily = 'San Francisco';

        // Extrapolation


        return (
            <div className="dashboard">
                <div className="net">
                <div className="titleContainer">
                    <h1>
                        You have <br/>
                        {this.state.discretionary ? <span className={this.state.positive ? "positive" : "negative"}>${this.state.discretionary}</span> : null} <br/> 
                        safe to spend
                    </h1>
                    <h4>for {this.state.numberOfMonths} in {this.state.currentCityName}</h4>
                </div>
                <div className="chartContainer">
                    <Doughnut 
                    data={chartData}
                    height={null}
                    width={null}
                    options={chartOptions}
                    />
                </div>
                </div>
                { this.state.showAddCity &&
                <div className="controls addCityInputContainer">
                    <CityAddInput cities={cities} userid={auth.uid} currentcity={profile.currentcity} />
                    <Link to='/' className="add cancel" onClick={this.state.toggleAddCity.bind(this)}>Cancel</Link>
                </div>
                }
                { !this.state.showAddCity &&
                <div className="controls cityListContainer">
                    <CityList cities={cities} userid={auth.uid} currentcity={profile.currentcity} />
                    <ul className="cities extrapolator">
                        { this.props.cities ?
                        <Select 
                        options={extrapolateList}
                        classNamePrefix="select"
                        isSearchable={false}
                        onChange={this.extrapolate.bind(this)}
                        defaultValue={extrapolateList[0]}
                        />
                        : null}
                    </ul>
                    <Link to='/' className="add addcity" onClick={this.state.toggleAddCity.bind(this)}>+ <span>Add</span> City</Link> 
                    <Link to='/add' className="add">+ <span>Add</span> Bill</Link>
                </div>
                }
                <BillList bills={bills} totalCost={this.state.totalCost} currentcity={profile.currentcity}/>
                <div className="deleteCity">
                    {this.state.currentCityName ? <CityData city={this.state.currentCityName} /> : null}
                    <Link to='/' id={profile.currentcity} onClick={this.deleteCityListener}>Delete {cities ? this.state.currentCityName : null}</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.firestore.ordered.bills,
        cities: state.firestore.ordered.cities,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCity: (city) => dispatch(deleteCity(city))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect((props) => [
        { collection: 'bills', where: [['userid', '==', props.auth.uid]], orderBy: [['cost', 'desc']]},
        { collection: 'cities', where: [['userid', '==', props.auth.uid]]}
    ])
)(Dashboard);