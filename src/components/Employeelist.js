import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getUserDetail } from './../actions/index';


class Employeelist extends Component {
	
	constructor(props){
		super(props);
	}

	componentWillMount(){
		//console.log(this.props.token);
		//this.props.getUserDetail(this.props.token);
		//console.log(this.props.detail);
	}


	render(){
		return(
			<View>
				<Text></Text>
				<Text>Employee List</Text>
			</View>
		);
	}
}

function mapStateToProps(state){
	console.log(state.auth.user);
	return {
		token: state.auth.token,
		//detail: state.user.detail
	}
}

export default connect(mapStateToProps, { getUserDetail })(Employeelist);