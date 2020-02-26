import React, { Component, Fragment } from 'react';
import { View, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './Reset.style.js';
import MAGIC from '../../../constants/en_US.json';
import TopGreenRectangle from '../../../directives/TopGreenRectangle';
import CardWithField from '../../../directives/CardWithField';

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
			<Fragment>
				<SafeAreaView style={styles.safeAreaTop} />
				<SafeAreaView style={styles.safeAreaBottom}>
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
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default withNavigation(Reset);