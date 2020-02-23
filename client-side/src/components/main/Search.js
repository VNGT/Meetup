import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/search.style';
import CardWithField from '../../directives/CardWithField';
import NavigationFooter from '../../directives/NavigationFooter';

class Search extends Component {

	// static navigationOptions = {
	// 	header: null
	// };

	constructor(props) {
		super(props);
		this.state = {  };
	}

	render() {
		return (
			<View style={styles.view}>
				
				{/* <CardWithField setCard={1}/> */}
				<NavigationFooter/>
			</View>
		);
	}
}

export default Search;