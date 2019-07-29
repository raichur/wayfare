import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import BillList from '../bills/BillList';
import CityList from '../cities/CityList';
import CityAddInput from '../cities/CityAddInput';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { deleteCity } from '../../store/actions/cityActions';
import { Doughnut } from 'react-chartjs-2';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showAddCity: false,
            toggleAddCity() {
                this.setState({
                    showAddCity: !this.state.showAddCity
                })
            }
        }
    }

    deleteCityListener = (e) => {
        if (window.confirm('Are you sure you wish to delete this city?')) {
            this.props.deleteCity(e.target);
        }
    }

    render() {
        
        const { bills, cities, auth, profile } = this.props;
        let discretionary = 0, positive = true, totalCost = 0;
        
        if (!auth.uid) {
            return <Redirect to='/login' />
        }

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
        
        if (bills && profile) {
            totalCost = bills.sum('cost')
            discretionary = profile.income - totalCost
            if (discretionary <= 100) {
                positive = false;
            }
        }

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
            aspectRatio: 1,
            legend: {
                display: false
            },
            animation: {
                duration: 0
            }
        };
        

        return (
            <div className="dashboard">
                <div className="net">
                <h1>You have <br/>{discretionary ? <span className={positive ? "positive" : "negative"}>${discretionary}</span> : null}<br/> safe to spend</h1>
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
                    <Link to='/' className="add addcity" onClick={this.state.toggleAddCity.bind(this)}>+ <span>Add</span> City</Link> 
                    <Link to='/add' className="add">+ <span>Add</span> Bill</Link>
                </div>
                }
                <BillList bills={bills} totalCost={totalCost} currentcity={profile.currentcity}/>
                <div className="deleteCity">
                    <Link to='/' id={profile.currentcity} onClick={this.deleteCityListener}>Delete {cities ? cities.find(function(city) {return city.id === profile.currentcity}).name : null}</Link>
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