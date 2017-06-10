import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
					/>
				</CardSection>

				<CardSection>
				<Input 
					placeholder={'Phone: 0019381923'} 
					/>
				</CardSection>

				<CardSection>
				</CardSection>

				
				<Button onPressedAction = {this.submitForm.bind(this)} title={'Create'}/>
			</Card>
		);
	}
}


export default Employeecreate;