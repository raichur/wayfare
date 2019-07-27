const createBill = (bill) => {
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

const updateBill = (bill) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('bills').doc(bill.id).update({
            ...bill,
        }).then(() => {
            dispatch({ type: 'UPDATE_BILL', bill });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_BILL_ERROR', err});
        })
    }
};

const deleteBill = (bill) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('bills').doc(bill.id).delete().then(() => {
            dispatch({ type: 'DELETE_BILL', bill });
        }).catch((err) => {
            dispatch({ type: 'DELETE_BILL_ERROR', err});
        })
    }
};

export { createBill, updateBill, deleteBill };