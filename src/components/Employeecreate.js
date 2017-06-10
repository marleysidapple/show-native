import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { handleEmployeeFormUpdate } from './../actions/employee';
import Card from './../common/Card';
import CardSection from './../common/CardSection';
import Input from './../common/Input';
import Button from './../common/Button';



class Employeecreate extends Component{

	submitForm(){
		console.log('asd');
	}


	render(){
		return(
			<Card>
				<CardSection>
				<Input 
					placeholder={'Employee Name'} 
					value={this.props.name}
					onChangeText={text => this.props.handleEmployeeFormUpdate({prop: 'name', value: text})}
					/>
				</CardSection>

				<CardSection>
				<Input 
					placeholder={'Phone: 0019381923'} 
					value={this.props.phone}
					onChangeText={text => this.props.handleEmployeeFormUpdate({prop: 'phone', value: text})}
					/>
				</CardSection>

				<CardSection>
				</CardSection>

				
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


export default connect(mapStateToProps, { handleEmployeeFormUpdate })(Employeecreate);