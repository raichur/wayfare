export const changeCurrentCity = (city) => {
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

export const createCity = (city) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        firestore.collection('cities').add({
            name: city,
            userid: userId
        }).then(() => {
            dispatch({ type: 'CREATE_CITY', city });
        }).then((e) => {
            console.log(e)
            // changeCurrentCity(city)
        }).catch((err) => {
            dispatch({ type: 'CREATE_CITY_ERROR', err});
        })
    }
};