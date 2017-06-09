//defining all the possible screens that the app will have



import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Loginform from './components/Loginform';
import Employeelist from './components/Employeelist';   //second screen


class RouterComponent extends Component {
	constructor(props){
		super(props);
	}

	render(){
		//passing style to scene using SceneStyle : global styling and gets applied to all the scenes
		//key could be anything
		return(
			<Router sceneStyle={{paddingTop: 65}}>
	 			<Scene key="login" component={Loginform} title={'Please Login'} />
	 			<Scene key="employeelist" component={Employeelist} title={'Employees'} />
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