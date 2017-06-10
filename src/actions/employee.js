import { HANDLE_EMPLOYEE_FORM_UPDATE } from './types';

//making action creator dynamic
export const handleEmployeeFormUpdate = ({ prop, value}) => {
	return{
		type: HANDLE_EMPLOYEE_FORM_UPDATE,
		payload: { prop, value}
	};
}