import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './reducers';
import Header  from './common/Header';
import Loginform  from './components/Loginform';



const store = applyMiddleware(thunk, promise)(createStore);


class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Provider store={store(reducers)}>
				<View style={{flex: 1}}>
					<Header headerText={'Login'}/>
					<Loginform />
				</View>
			</Provider>
		);
	}
}

export default App;