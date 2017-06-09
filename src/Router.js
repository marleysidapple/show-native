//defining all the possible screens that the app will have



import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Loginform from './components/Loginform';


class RouterComponent extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Router>
	 			<Scene key="login" component={Loginform} title={'Please Login'} />
	 		</Router>
		);
	}


}


export default RouterComponent;


/*
* functional component
*
*/


// const RouterComponent = () => {
// 	return(
// 		<Router>
// 			<Scene key="login" component={Loginform} title={'Please Login'} />
//  		</Router>
// 	);
// }



// export default RouterComponent;