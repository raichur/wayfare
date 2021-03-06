export const login = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_FAILED', err })
        })
    } 
}

export const logout = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res) => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                income: newUser.income
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({ type: 'SIGNUP_FAILED', err})
        })
    }
}

export const editAccount = (account) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const userId = getState().firebase.auth.uid;
        firestore.collection('users').doc(userId).update({
            ...account,
            initials: account.firstName[0] + account.lastName[0]
        }).then(() => {
            dispatch({ type: 'EDIT_ACCOUNT_SUCCESS', account });
        }).catch((err) => {
            dispatch({ type: 'EDIT_ACCOUNT_ERROR', err});
        })
    }
};