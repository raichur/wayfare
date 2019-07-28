export const changeCurrentCity = (city, userid) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        console.log(city, userid)
        firestore.collection('users').doc(userid).update({
            currentcity: city
        }).then(() => {
            dispatch({ type: 'UPDATE_CITY', city });
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'UPDATE_CITY_ERROR', err});
        })
    }
};