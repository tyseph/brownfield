import { combineReducers } from 'redux';
import adminReducer from "./admin/adminReducers"
import userReducer from "./user/userReducer"
import authReducer from './auth/authReducers';

const rootReducer = combineReducers({
    admin: adminReducer,
    auth: authReducer,
    user: userReducer
});

export default rootReducer;