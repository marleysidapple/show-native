import { EMAIL_CHANGED, 
		PASSWORD_CHANGED, 
		USER_LOGIN_SUCCESS,
		USER_LOGIN_FAIL,
		LOGIN_USER,
		 } from './../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false};


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };

		case PASSWORD_CHANGED:
			return { ...state, password: action.payload};

		case LOGIN_USER:
			return { ...state, loading: true, error: '' };

		case USER_LOGIN_SUCCESS:
			return {...state, user: action.payload, error: '', loading: false, email: '', password:'' };

		case USER_LOGIN_FAIL:
			return { ...state, error: action.payload, password: '', loading: false };

		default:
			return state;

	}
}

