import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import employee_reducer from './employee_reducer';
import employee_list_reducer from './employee_list_reducer';
import user_reducer from './user_reducer';

export default combineReducers({
	auth: auth_reducer,
	employee: employee_reducer,
	employee_list: employee_list_reducer,
	detail: user_reducer
});