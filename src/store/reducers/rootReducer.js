import authReducer from './authReducer';
import billReducer from './billReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    bill: billReducer
});

export default rootReducer;