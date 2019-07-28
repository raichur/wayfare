export const createBill = (bill) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        firestore.collection('bills').add({
            ...bill,
            userid: userId
        }).then(() => {
            dispatch({ type: 'CREATE_BILL', bill });
        }).catch((err) => {
            dispatch({ type: 'CREATE_BILL_ERROR', err});
        })
    }
};

export const updateBill = (bill, id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('bills').doc(id).update({
            ...bill,
        }).then(() => {
            dispatch({ type: 'UPDATE_BILL', bill });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_BILL_ERROR', err});
        })
    }
};

export const deleteBill = (bill) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('bills').doc(bill.id).delete().then(() => {
            dispatch({ type: 'DELETE_BILL', bill });
        }).catch((err) => {
            dispatch({ type: 'DELETE_BILL_ERROR', err});
        })
    }
};