import { EMAIL_CHANGED, 
		PASSWORD_CHANGED, 
		USER_LOGIN_SUCCESS, 
		USER_LOGIN_FAIL,
		LOGIN_USER,
		GET_USER_DETAIL
	} from './types';

import { Actions } from 'react-native-router-flux';

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
				//Navigating user to the employeelist on successful login-
				Actions.main();
			})
			.catch((error) => {
				dispatch({
					type: USER_LOGIN_FAIL,
					payload: 'Invalid attempt'
				});
			});
		};
}

export function getUserDetail(token){
	return (dispatch) => {
		axios.get(`http://localhost:8000/api/v1/auth/user/${token}`).then(detail => {
			dispatch({
				type: GET_USER_DETAIL,
				payload: detail
			});
		});
	}
}
