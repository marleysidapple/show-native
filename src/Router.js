//defining all the possible screens that the app will have
//making this one a functional component


import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Loginform from './components/Loginform';


const RouterComponent = () => {
	return(
		<Router>
			<Scene key="login" component={Loginform} title={'Please Login'} />
 		</Router>
	);
}



export default RouterComponent;