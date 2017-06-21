 //defining all the possible screens that the app will have



import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Loginform from './components/Loginform';
import Employeelist from './components/Employeelist';   //second screen
import Employeecreate from './components/Employeecreate';   //second screen
import EmployeeEdit from './components/EmployeeEdit';   //second screen


class RouterComponent extends Component {
	constructor(props){
		super(props);
	}

	render(){
		//passing style to scene using SceneStyle : global styling and gets applied to all the scenes
		//key could be anything
		return(
			<Router sceneStyle={{paddingTop: 65}}>
				<Scene key="auth">
	 				<Scene key="login" component={Loginform} title={'Please Login'} />
	 			</Scene>

	 			<Scene key="main">
	 				<Scene onRight = {() => Actions.addEmployee()} rightTitle='Add' key="employeeList" component={Employeelist} title={'Employees'} inital/>
	 				<Scene key="addEmployee" component={Employeecreate} title={'Add Employee'} />
	 				<Scene key="editEmployee" component={EmployeeEdit} title={'Edit Employee'} />
	 			</Scene>
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