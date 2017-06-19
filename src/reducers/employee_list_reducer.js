import {
	FETCH_EMPLOYEE_LIST
} from './../actions/types';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action){
	switch(action.type){
		
		case FETCH_EMPLOYEE_LIST:
			return action.payload;

		default:
			return state;
	}
}

