import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import Card from './../common/Card';
import Confirm from './../common/Confirm';
import CardSection from './../common/CardSection';
import Button from './../common/Button';
import Employeeform from './Employeeform';
import { handleEmployeeFormUpdate, updateEmployeeDetail } from './../actions/employee';
import Communications from 'react-native-communications';
import Input from './../common/Input';
import _ from 'lodash';



class EmployeeEdit extends Component {

state = { showModal: false};

	constructor(){
		super();
		
	}

	componentWillMount(){
		_.forEach(this.props.em, (value, prop) => {
			this.props.handleEmployeeFormUpdate({prop, value});
		});
		
	}

	onTextPress(){
		Communications.text(this.props.phone, `Your shift is on ${this.props.shift}`);
	}

	 onAccept() {
   		// const { uid } = this.props.employee;
        // this.props.employeeDelete({ uid });
  }


	onFirePress(){
		this.setState({ showModal: !this.state.showModal });
	}

	 onDecline() {
	    this.setState({ showModal: false });
	 }

	onButtonPress(){
		const updatedDetail = {
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
				<Button onPressedAction={this.onTextPress.bind(this)} title={'Text Schedule'} />
				<Button onPressedAction={this.onFirePress.bind(this)} title={'Fire Employee'} />

				<Confirm
					 visible={this.state.showModal}
			         onAccept={this.onAccept.bind(this)}
			         onDecline={this.onDecline.bind(this)}
				>
					Are you sure?
				</Confirm>
			</Card>
		);
	}
}

function mapStateToProps(state){
	return {
		name: state.employee.name,
		phone:state.employee.phone,
		shift: state.employee.shift,
		em_id: state.employee.id
	}
}


export default connect(mapStateToProps, { handleEmployeeFormUpdate, updateEmployeeDetail })(EmployeeEdit);