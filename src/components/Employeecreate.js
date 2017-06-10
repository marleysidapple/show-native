import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
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
					 <Picker selectedValue={this.props.shift}
					 	onValueChange={day => this.props.handleEmployeeFormUpdate({prop: 'shift', value: day})}
					 	style={{flex: 1}}
					 >
					 	<Picker.Item label="Monday" value="Monday"/> 
					 	<Picker.Item label="Tuesday" value="Tuesday"/> 
					 	<Picker.Item label="Wednesday" value="Wednesday"/> 
					 	<Picker.Item label="Thursday" value="Thursday"/> 
					 	<Picker.Item label="Friday" value="Friday"/> 
					 	<Picker.Item label="Saturday" value="Saturday"/> 
					 	<Picker.Item label="Sunday" value="Sunday"/> 
					 </Picker>
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