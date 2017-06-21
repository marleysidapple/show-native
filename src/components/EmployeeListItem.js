import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import CardSection from './../common/CardSection';
import { Actions } from 'react-native-router-flux';


class EmployeeListItem extends Component{

	constructor(props){
		super(props);
	}

	onRowPress(){
		Actions.editEmployee({employee: this.props.employee});
	}


	render(){
		return(
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<CardSection>
						<Text>{this.props.employee.name}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>

		);
	}
}

export default EmployeeListItem;