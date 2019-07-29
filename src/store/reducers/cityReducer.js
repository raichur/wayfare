const initState = {
    cities: []
};
const cityReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_CITY':
            console.log('created city', action.city);
            return state;
        case 'CREATE_CITY_ERROR':
            console.error('error creating city: ', action.err);
            return state;
        case 'UPDATE_CITY':
            console.log('updated current city', action.city);
            return state;
        case 'UPDATE_CITY_ERRROR':
            console.error('updated current city error: ', action.err);
            return state;
        case 'DELETE_CITY':
            console.log('deleted city', action.city);
            return state;
        case 'DELETE_CITY_ERROR':
            console.error('error deleting city: ', action.err);
            return state;
        default:
            return state;
    }
}

export default cityReducer;