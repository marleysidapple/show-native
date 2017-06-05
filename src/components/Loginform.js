import React, { Component } from 'react';
import { View, Text, AlertIOS } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from './../actions';
import Card from './../common/Card';
import CardSection from './../common/CardSection';
import Input from './../common/Input';
import Button from './../common/Button';
import Spinner from './../common/Spinner';

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
		const { email, password } = this.props;
		this.props.loginUser({email, password});

	}


	showEitherButtonOrSpinner(){
		if(this.props.loading){
			return <Spinner  size={'small'}/>;
		}
		return <Button onPressedAction = {this.submitForm.bind(this)} title={'Login'}/>;
	}

	
	render(){
		return(
			<Card>
				<Text>{this.props.error}</Text>
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

				{this.showEitherButtonOrSpinner()}
				
			</Card>
		);
	}
}


function mapStateToProps(state){
	console.log(state.auth);
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading,
	};
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Loginform);