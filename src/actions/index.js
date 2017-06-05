import { EMAIL_CHANGED, 
		PASSWORD_CHANGED, 
		USER_LOGIN_SUCCESS, 
		USER_LOGIN_FAIL,
		LOGIN_USER
	} from './types';

import axios from 'axios';

export function emailChanged(email){
	return {
		type: EMAIL_CHANGED,
		payload: email
	};
}


export function passwordChanged(password){
	return {
		type: PASSWORD_CHANGED,
		payload: password
	};
}

export function loginUser({email, password}){
	
	return (dispatch) =>{

			//for sake of showing spinner;
			dispatch({type: LOGIN_USER});

			axios.post('http://localhost:8000/api/v1/auth/login', {email, password})
			.then(user => {
				dispatch({
					type: USER_LOGIN_SUCCESS,
					payload: user
				});
			})
			.catch((error) => {
				dispatch({
					type: USER_LOGIN_FAIL,
					payload: 'Invalid attempt'
				});
			});
		};
}