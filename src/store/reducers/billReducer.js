const initState = {
    bills: [
        {id: '1', cityid: '1', name: 'Rent', cost: '400', description: '1 bedroom apt', color: '#000'},
        {id: '2', cityid: '1', name: 'Food', cost: '300', description: 'Eating out and cooking at home', color: '#2d974e'},
        {id: '3', cityid: '1', name: 'Electricity', cost: '50', description: '', color: '#7F3685'},
    ]
};
const billReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BILL':
            console.log('created bill', action.bill);
    }
    return state;
}

export default billReducer;