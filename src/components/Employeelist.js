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
		if (this.props.employee != nextProps.employee){
				console.log(nextProps.employee);
				console.log('with map');
				_.map(nextProps.employee, (val, id) => console.log(val));
				//this.setState({ allEmp: nextProps.employee });
		}
	}

	

	

	render(){
		return (
			<Text>
				Hey
			</Text>
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