const initState = {
    cities: [
        
    ]
};
const cityReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CITY':
            console.log('created bill', action.bill);
            return state;
        case 'CREATE_CITY_ERROR':
            console.error('error creating bill: ', action.err);
            return state;
        case 'DELETE_CITY':
            console.log('deleted bill', action.bill);
            return state;
        case 'DELETE_CITY_ERROR':
            console.error('error deleting bill: ', action.err);
            return state;
        default:
            return state;
    }
}

export default cityReducer;