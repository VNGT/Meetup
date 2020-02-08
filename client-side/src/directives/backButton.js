import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import glStyle from '../styles/global.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';
Icon.loadFont(); // Load the font

class BackButton extends Component {

	render() {
		return (
			<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
				<Icon style={glStyle.backButton} name="arrow-back"/>
			</TouchableOpacity>
		);
	}
}

export default withNavigation(BackButton);