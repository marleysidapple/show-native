import React, { Component } from 'react';
import { Text, View, Picker, StyleSheet } from 'react-native';
import CardSection from './../common/CardSection';
import { connect } from 'react-redux';
import { handleEmployeeFormUpdate } from './../actions/employee';
import Card from './../common/Card';
import Input from './../common/Input';


class Employeeform extends Component {

	constructor(props){
		super(props);
	}

	daysOfWeek(){
		const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return days; 
	}


	render(){
		return(
			<View>
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

			</View>
		);
	}

}

const styles = StyleSheet.create({
	pickerLabelStyle: {
		fontSize: 18,
		paddingLeft: 20
	}

});

function mapStateToProps(state){
	return {
		name: state.employee.name,
		phone: state.employee.phone,
		shift: state.employee.shift
	};
}

export default connect(mapStateToProps, { handleEmployeeFormUpdate })(Employeeform);