import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from './../actions/index';
import { getEmployeeList } from './../actions/employee';


class Employeelist extends Component {
	
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.getEmployeeList();
	}


	

	render(){
		return(
			<View>
				<Text>{this.props.detail.fullname}</Text>
				<Text>Employee List</Text>
			</View>
		);
	}
}

function mapStateToProps(state){
	console.log(state.employee_list);
	return {
		//token: state.auth.token,
		detail: state.auth.user
	}
}

export default connect(mapStateToProps, { loginUser, getEmployeeList })(Employeelist);