import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { handleEmployeeFormUpdate, saveEmployeeDetail, resetFormField } from './../actions/employee';
import Card from './../common/Card';
import CardSection from './../common/CardSection';
import Employeeform from './Employeeform';
import Input from './../common/Input';
import Button from './../common/Button';



class Employeecreate extends Component{


	componentWillMount(){
		this.props.resetFormField();
	}

	submitForm(){
		const employee = {
			name: this.props.name,
			phone: this.props.phone,
			shift: this.props.shift || 'Mon'  //if the shift is not set, then set to Mon by default because picker doesnot set value at first
		};
		this.props.saveEmployeeDetail(employee);
	}


	daysOfWeek(){
		const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return days; 
	}


	render(){
		//console.log(this.props.employee);
		return(
			<Card>
				<Employeeform  {...this.props}/>
				<Button onPressedAction = {this.submitForm.bind(this)} title={'Create'}/>
			</Card>
		);
	}
}

function mapStateToProps(state){
	return {
		name: state.employee.name,
		phone: state.employee.phone,
		shift: state.employee.shift,
	}
}





export default connect(mapStateToProps, { handleEmployeeFormUpdate, saveEmployeeDetail, resetFormField })(Employeecreate);