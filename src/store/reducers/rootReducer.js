import authReducer from './authReducer';
import billReducer from './billReducer';
import cityReducer from './cityReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    bill: billReducer,
    city: cityReducer
});

export default rootReducer;