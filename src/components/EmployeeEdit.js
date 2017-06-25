import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Card from './../common/Card';
import CardSection from './../common/CardSection';
import Button from './../common/Button';
import Employeeform from './Employeeform';
import { handleEmployeeFormUpdate, updateEmployeeDetail } from './../actions/employee';
import Input from './../common/Input';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';


class EmployeeEdit extends Component {


	componentWillMount(){
		_.forEach(this.props.em, (value, prop) => {
			this.props.handleEmployeeFormUpdate({prop, value});
		});
		
	}

	onButtonPress(){
		const updatedDetail = {
			id: this.props.id,
			name: this.props.name,
			phone: this.props.phone,
			shift: this.props.shift,
		};

		this.props.updateEmployeeDetail(updatedDetail, this.props.em_id);
	}

	render(){
		return(
			<Card>
				<Employeeform />
				<Button onPressedAction={this.onButtonPress.bind(this)} title={'Save Changes'} />
			</Card>
		);
	}
}

function mapStateToProps(state){
	return {
		name: state.employee.name,
		phone:state.employee.phone,
		shift: state.employee.shift,
	}
}


export default connect(mapStateToProps, { handleEmployeeFormUpdate, updateEmployeeDetail })(EmployeeEdit);