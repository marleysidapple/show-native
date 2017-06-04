import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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