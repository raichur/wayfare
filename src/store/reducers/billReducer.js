const initState = {
    bills: [
        {id: '1', cityid: 'austin', name: 'Rent', cost: '400', description: '1 bedroom apt', color: '#000'},
        {id: '2', cityid: 'austin', name: 'Food', cost: '300', description: '50% eating out and 50% cooking at home', color: '#2d974e'},
        {id: '3', cityid: 'austin', name: 'Electricity', cost: '50', description: '', color: '#7F3685'},
    ]
};
const billReducer = (state = initState, action) => {
    return state;
}

export default billReducer;