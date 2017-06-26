import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';


class Confirm extends Component {

	constructor(props){
		super(props);
	}


	render(){
		return(
			<Modal
				animationType={"slide"}
		        transparent={false}
		        visible={this.props.visible}
		        onRequestClose={() => {}}
			>
				<View style={styles.containerStyle}>
					<CardSection style={styles.cardSectionStyle}>
						<Text style={styles.textStyle}>{this.props.children}</Text>
					</CardSection>


						<Button  onPressedAction={this.props.onAccept}>Confirm</Button>
						<Button  onPressedAction={this.props.onDecline}>Cancel</Button>
				</View>
			</Modal>
		);
	}

}

const styles = {
	 cardSectionStyle: {
	 	 justifyContent: 'center'
	 },
	 textStyle: {
	 	flex: 1,
	    fontSize: 18,
	    textAlign: 'center',
	    lineHeight: 40
	 },
	 containerStyle: {
	 	backgroundColor: 'rgba(0, 0, 0, 0.75)',
	    position: 'relative',
	    flex: 1,
	 },


	

};


export default Confirm;