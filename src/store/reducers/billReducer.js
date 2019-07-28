const initState = {
    bills: []
};
const billReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BILL':
            console.log('created bill', action.bill);
            return state;
        case 'CREATE_BILL_ERROR':
            console.error('error creating bill: ', action.err);
            return state;
        case 'UPDATE_BILL':
            console.log('updated bill', action.bill);
            return state;
        case 'UPDATE_BILL_ERROR':
            console.error('error updating bill: ', action.err);
            return state;
        case 'DELETE_BILL':
            console.log('deleted bill', action.bill);
            return state;
        case 'DELETE_BILL_ERROR':
            console.error('error deleting bill: ', action.err);
            return state;
        default:
            return state;
    }
}

export default billReducer;