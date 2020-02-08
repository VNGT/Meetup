import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/login.style';
import MAGIC from '../../constants/en_US';
import TopGreenRectangle from '../../directives/TopGreenRectangle';
import CardWithField from '../../directives/CardWithField';

class Reset extends Component {

	static navigationOptions = {
		header : null
	};

	constructor(props) {
		super(props);
		this.state = {  };
	}

	render() {
		return (
			<View style={styles.loginView}>
				<TopGreenRectangle
					setHeight={280}
					setTitle={MAGIC.FORGET_PASS.SECOND_TITLE}
					setSub={MAGIC.FORGET_PASS.SECOND_SUB}
					showBackArrow={true}
				/>
				<CardWithField
					setCard={5}
				/>
			</View>
		);
	}
}

export default withNavigation(Reset);