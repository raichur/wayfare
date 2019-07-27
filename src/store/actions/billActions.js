export const createBill = (bill) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        
        dispatch({ type: 'CREATE_BILL', bill });
    }
};