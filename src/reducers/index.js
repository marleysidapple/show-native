import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import employee_reducer from './employee_reducer';
import user_reducer from './user_reducer';

export default combineReducers({
	auth: auth_reducer,
	employee: employee_reducer,
	detail: user_reducer
});