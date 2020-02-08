import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import glStyle from '../../styles/global.style';
import BackButton from '../../directives/BackButton';
import MAGIC from '../../constants/en_US';
import DimissKeyboard from '../../directives/DimissKeyboard';

class Reset extends Component {

	static navigationOptions = {
		header : null
	};

	constructor(props) {
		super(props);
		this.state = {  };
	}

	headerTextView = () => {
		return (
			<Text style={glStyle.headerText}>{MAGIC.FORGET_PASS.HEADER}</Text>
		);
	};

	subtitleTextView = () => {
		return (
			<Text style={glStyle.subtitleText}>{MAGIC.FORGET_PASS.SUBTITLE}</Text>
		);
	};

	titleView = () => {
		return(
			<View>
				<BackButton/>
				<this.headerTextView/>
				<this.subtitleTextView/>
			</View>
		);
	};

	render() {
		return (
			<View style={glStyle.mainView}>
				<this.titleView/>
			</View>
		);
	}
}

export default withNavigation(Reset);