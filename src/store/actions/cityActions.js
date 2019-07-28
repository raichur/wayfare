export const changeCurrentCity = (city, userid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('users').doc(userid).update({
            currentcity: city
        }).then(() => {
            dispatch({ type: 'UPDATE_CITY', city });
        }).catch((err) => {
            dispatch({ type: 'UPDATE_CITY_ERROR', err});
        })
    }
};