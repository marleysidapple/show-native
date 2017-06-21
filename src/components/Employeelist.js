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
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps){
		
		// if (this.props.employee != nextProps.employee){
		// 		console.log(nextProps.employee);
		// 		console.log('with map');
		// 		_.map(nextProps.employee, (val, id) => console.log(val));
		// 		//this.setState({ allEmp: nextProps.employee });
		// }
		this.createDataSource(nextProps);
	}

	createDataSource(props){
		//creating a data source
		 const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		 this.dataSource = ds.cloneWithRows(props.employee);
	}

	

	

	render(){
		console.log(this.props);
		return (
			<ListView
				enableEmptySections
		        dataSource={this.dataSource}
		        renderRow={(rowData) => <Text>{rowData.name}</Text>} />
		);
	}
}

function mapStateToProps(state){
	const employeeConvertedToArray = _.map(state.employee_list, (val, id) => {
		return {...val, id};
	});

	return {
		employee: employeeConvertedToArray,
		//employee: state.employee_list,
		//token: state.auth.token,
		detail: state.auth.user
	}
}

export default connect(mapStateToProps, { loginUser, getEmployeeList })(Employeelist);