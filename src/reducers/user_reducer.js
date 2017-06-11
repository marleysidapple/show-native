import {
	GET_USER_DETAIL
} from './../actions/types';

const INITIAL_STATE = { detail: '' };

export default function(state=INITIAL_STATE, action){
	switch(action.type){

		case GET_USER_DETAIL:
		//square bracket = key interpolation
			return { ...state,  detail: action.payload}
		default:
			return state;
	}
}