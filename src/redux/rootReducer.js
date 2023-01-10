import { combineReducers } from 'redux';
import {adminReducer} from "./admin/adminReducers"
import {userReducer} from "./user/userReducer"
import {authReducer} from './auth/authReducers';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    user: userReducer
});

export default rootReducer;