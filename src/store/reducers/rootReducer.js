import authReducer from './authReducer';
import billReducer from './billReducer';
import cityReducer from './cityReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    bill: billReducer,
    city: cityReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;