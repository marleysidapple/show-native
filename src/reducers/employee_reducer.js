import {
	HANDLE_EMPLOYEE_FORM_UPDATE,
	EMPLOYEE_CREATE_SUCCESS,
	CLEAR_EMPLOYEE_FORM
} from './../actions/types';

const INITIAL_STATE = { id: '', name: '', phone: '', shift: ''};

export default function(state=INITIAL_STATE, action){
	switch(action.type){

		case HANDLE_EMPLOYEE_FORM_UPDATE:
		//square bracket = key interpolation
			return { ...state,  [action.payload.prop]: action.payload.value};

		case EMPLOYEE_CREATE_SUCCESS:
			//or we can just return a INITIAL_STATE (return INITIAL_STATE;) because values are empty in initial state.
			return {...state, name: '', phone: '', shift: ''};

		case CLEAR_EMPLOYEE_FORM:
			return INITIAL_STATE;


		default:
			return state;
	}
}

