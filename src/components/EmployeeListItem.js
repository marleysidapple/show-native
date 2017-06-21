import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CardSection from './../common/CardSection';


class EmployeeListItem extends Component{

	constructor(props){
		super(props);
	}


	render(){
		return(
			<CardSection>
				<Text>{this.props.employee.name}</Text>
			</CardSection>

		);
	}
}

export default EmployeeListItem;