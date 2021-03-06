const changeCurrentCity = (city) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        firestore.collection('users').doc(userId).update({
            currentcity: city
        }).then(() => {
            dispatch({ type: 'UPDATE_CITY', city });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_CITY_ERROR', err});
        })
    }
};

const createCity = (city) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        firestore.collection('cities').add({
            name: city,
            userid: userId
        }).then(() => {
            dispatch({ type: 'CREATE_CITY', city });
        }).catch((err) => {
            dispatch({ type: 'CREATE_CITY_ERROR', err});
        })
    }
};

const deleteCity = (city) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('cities').doc(city.id).delete().then(() =>  {
            dispatch({ type: 'DELETE_CITY', city });   
        }).catch((err) => {
            dispatch({ type: 'DELETE_CITY_ERROR', err});
        })
    }
};

export {changeCurrentCity, createCity, deleteCity}