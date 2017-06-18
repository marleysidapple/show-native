import { HANDLE_EMPLOYEE_FORM_UPDATE, EMPLOYEE_CREATE_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

//making action creator dynamic
export const handleEmployeeFormUpdate = ({ prop, value}) => {
	return{
		type: HANDLE_EMPLOYEE_FORM_UPDATE,
		payload: { prop, value}
	};
}

export function saveEmployeeDetail(employee){
	return (dispatch) => {
		axios.post('http://localhost:8000/api/v1/employee/add', employee).then(emp => {
			dispatch({
				type: EMPLOYEE_CREATE_SUCCESS,
				payload: 'User created successfully'
			});
			//navigate to list view
			Actions.employeeList();
		});
	}
}