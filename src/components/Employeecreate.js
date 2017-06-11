import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { handleEmployeeFormUpdate, saveEmployeeDetail } from './../actions/employee';
import Card from './../common/Card';
import CardSection from './../common/CardSection';
import Input from './../common/Input';
import Button from './../common/Button';



class Employeecreate extends Component{

	submitForm(){
		const employee = {
			name: this.props.name,
			phone: this.props.phone,
			shift: this.props.shift
		};
		this.props.saveEmployeeDetail(employee);
	}


	daysOfWeek(){
		const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return days; 
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
					<Text>Shift</Text>
					 <Picker selectedValue={this.props.shift}
					 	onValueChange={day => this.props.handleEmployeeFormUpdate({prop: 'shift', value: day})}
					 	style={{flex: 1}}
					 >
					  {this.daysOfWeek().map(d => <Picker.Item key={d} label={d} value={d} />)}
					 
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


const styles = StyleSheet.create({
	pickerLabelStyle: {
		fontSize: 18,
		paddingLeft: 20
	}

});


export default connect(mapStateToProps, { handleEmployeeFormUpdate, saveEmployeeDetail })(Employeecreate);