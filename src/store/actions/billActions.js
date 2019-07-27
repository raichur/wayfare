export const createBill = (bill) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('bills').add({
            ...bill,
            userid: 1,
            cityid: 1
        }).then(() => {
            dispatch({ type: 'CREATE_BILL', bill });
        }).catch((err) => {
            dispatch({ type: 'CREATE_BILL_ERROR', err});
        })
    }
};