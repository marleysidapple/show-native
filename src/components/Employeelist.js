import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from './../actions/index';
import { getEmployeeList } from './../actions/employee';
import _ from 'lodash';


class Employeelist extends Component {
	
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.getEmployeeList();
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps.employee);
		//this.createDataSource(nextProps.employee);
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
	return {
		employee: state.employee_list,
		//token: state.auth.token,
		detail: state.auth.user
	}
}

export default connect(mapStateToProps, { loginUser, getEmployeeList })(Employeelist);