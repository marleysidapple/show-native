import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from './../actions/index';


class Employeelist extends Component {
	
	constructor(props){
		super(props);
	}
	

	render(){
		return(
			<View>
				<Text>{this.props.detail.fullname}</Text>
				<Text>Employee List</Text>
			</View>
		);
	}
}

function mapStateToProps(state){
	return {
		//token: state.auth.token,
		detail: state.auth.user
	}
}

export default connect(mapStateToProps, { loginUser })(Employeelist);