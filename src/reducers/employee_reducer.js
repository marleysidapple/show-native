import {
	HANDLE_EMPLOYEE_FORM_UPDATE
} from './../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default function(state=INITIAL_STATE, action){
	switch(action.type){

		case HANDLE_EMPLOYEE_FORM_UPDATE:
		//square bracket = key interpolation
			return { ...state,  [action.payload.prop]: action.payload.value}
		default:
			return state;
	}
}