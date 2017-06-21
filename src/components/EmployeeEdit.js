import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Card from './../common/Card';
import CardSection from './../common/CardSection';
import Button from './../common/Button';
import Employeeform from './Employeeform';
import { employeeUpdate } from './../actions/employee';
import Input from './../common/Input';
import _ from 'lodash';


class EmployeeEdit extends Component {


	componentWillMount(){
		_.each(this.props.employee, (val, props) => {
			this.props.employeeUpdate({props, val});
		});
		
	}



	onButtonPress(){
		console.log(this.props.name);
		console.log(this.props.shift);
	}

	render(){
		return(
			<Card>
				<Employeeform />
				<Button onPress={this.onButtonPress.bind(this)} title={'Save Changes'} />
			</Card>

		);
	}


}

function mapStateToProps(state){
	console.log(state);
	// return {
	// 	name: state.Employeeform.name,
	// 	phone:state.Employeeform.phone,
	// 	shift: state.Employeeform.shift
	// }
}


export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);