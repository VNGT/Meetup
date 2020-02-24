import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/search.style';
import NavigationFooter from '../../directives/NavigationFooter';
import { TextInput, Text, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont(); 

class Search extends Component {
	state = { 
		searchValue: '',
	};

	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = { };
	}

	Title = () => <Text style={styles.title}>Search</Text>;

	RecentSearch = () => <Text style={styles.recentSearch}>Recent Searches</Text>;

	SearchField = () => (
		<View>
			{/* <Searchbar
				placeholder="Search"
				onChangeText={query => { this.setState({ searchValue: query }); }}
				value={this.state.searchValue}
			/> */}
		</View>
	);

	getRecentSearches() {

	}

	ResentSearchList = () => (
		<View style={styles.recentList}>
			<FlatList
				data={[
					{key: 'CS 1331 Final'},
					{key: 'CS 1332 Midterm'},
					{key: 'Mock Interview'},
				]}
				renderItem={({item}) => <Text style={styles.recentItem}>{item.key}</Text>}
			/>
		</View>
	);

	render() {
		return (
			<View style={styles.view}>
				<this.Title/>
				<this.SearchField/>
				<this.RecentSearch/>
				<this.ResentSearchList/>
				<NavigationFooter/>
			</View>
		);
	}
}

export default withNavigation(Search);