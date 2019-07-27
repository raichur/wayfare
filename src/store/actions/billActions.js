export const createBill = (bill) => {
    return (dispatch, getState) => {
        // Make call to db
        dispatch({ type: 'CREATE_BILL', bill });
    }
};