import React, { Component } from 'react';
import { Text, View } from 'react-native';


class EmployeeListItem extends Component{

	constructor(props){
		super(props);
	}


	render(){
		return(
			<View>
				<Text>{this.props.employee.name}</Text>
			</View>

		);
	}
}

export default EmployeeListItem;