import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from './../actions';
import Card from './../common/Card';
import CardSection from './../common/CardSection';
import Input from './../common/Input';
import Button from './../common/Button';

class Loginform extends Component {

	constructor(props){
		super(props);
	}

	onEmailChange(email){
		this.props.emailChanged(email);
	}

	onPasswordChange(password){
		this.props.passwordChanged(password);
	}


	submitForm(){
		console.log('asd');
	}

	render(){
		return(
			<Card>
				<CardSection>
					<Input 
					placeholder={'something@mail.com'} 
					onChangeText={this.onEmailChange.bind(this)}
					value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input placeholder={'password'} 
							secureTextEntry={true}
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
							/>
				</CardSection>

				<Button onPressedAction = {this.submitForm.bind(this)} title={'Login'}/>
			</Card>
		);
	}
}


function mapStateToProps(state){
	return {
		email: state.auth.email,
		password: state.auth.password
	};
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Loginform);