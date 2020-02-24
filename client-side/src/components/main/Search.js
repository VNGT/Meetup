import React, { Component } from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/search.style';
import NavigationFooter from '../../directives/NavigationFooter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GET } from '../../services/Https';
Icon.loadFont();

class Search extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			searchQuery: null,
			allowToSearch: false,
			searchResults: []
		};

		this.searchInput = React.createRef();
	}

	Title = () => <Text style={styles.title}>Search</Text>;

	RecentSearch = () => <Text style={styles.recentSearch}>Recent Searches</Text>;

	SearchField = () => (
		<View style={styles.searchField}>
			<View style={styles.colSizeSm}>
				<Icon style={styles.searchTextSpec} name="search" />
			</View>
			<View style={styles.colSizeLg}>
				<TextInput
					ref={this.searchInput}
					style={styles.searchTextSpec}
					placeholder='Search'
					onChangeText={text => this.searchBoxWhenClick(text)}
				/>
			</View>
			<this.ClearSearchBarIcon />
			<TouchableOpacity style={{alignSelf: 'center'}} disabled={!this.state.allowToSearch} onPress={this.searchQueryLogic}>
				<Text style={{
					color: this.state.allowToSearch ? 'blue' : '#c3c3c3',
					fontSize: 18
				}}>
					Search
				</Text>
			</TouchableOpacity>
		</View>
	);

	ClearSearchBarIcon = () => {
		if (this.state.allowToSearch) {
			return (
				<View style={styles.colSizeSm}>
					<TouchableOpacity onPress={this.clearSearchText}>
						<Icon style={[styles.searchTextSpec, styles.clearSpec]} name="clear" />
					</TouchableOpacity>
				</View>
			);
		}
		return <View style={styles.colSizeSm} />;
	};

	clearSearchText = () => {
		this.searchInput.current.clear();
		this.setState({allowToSearch: false, searchQuery: null});
	};

	searchBoxWhenClick = (text) => {
		if (text.length > 0) {
			this.setState({searchQuery: text, allowToSearch: true });
		} else {
			this.setState({searchQuery: text, allowToSearch: false });
		}
	};

	searchQueryLogic = () => {
		const { searchQuery } = this.state;
		console.log('searching');
		GET(`event/search/${searchQuery}`).then( res => {
			console.log(res.response.status);
			if (res.response.status !== '200') {
				console.log('NOT FOUND');
			} else {
				this.setState({ searchResults: res.data.data ? res.data.data : []});
			}
		}).catch(err => {
			console.log(err);
		});
	};

	SearchResults = () => {
		const { searchResults } = this.state;
		console.log(searchResults);
		return (
			<View style={styles.recentList}>
				{ searchResults.length !== 0 ? 
					<FlatList
						ItemSeparatorComponent={this.renderSeparator}
						data={searchResults}
						renderItem={({item}) => <Text style={styles.recentItem}>{item}</Text>}
					/>
					: <Text style={styles.result}>No Matching Results</Text>
				}
			</View>
		);
	}

	renderSeparator = () => {
		return (
			<View
				style={styles.renderSeperator}
			/>
		);
	};

	Separator = () => (
		<View style={styles.separator}/>
	);

	SearchIcon = () => (
		<Icon name="access-time" size={20} color="#CED0CE"/>
	);

	ResentSearchList = () => (
		<View style={styles.recentList}>
			<FlatList
				ItemSeparatorComponent={this.renderSeparator}
				data={[
					{key: 'CS 1331 Final'},
					{key: 'CS 1332 Midterm'},
					{key: 'Mock Interview'},
				]}
				renderItem={({item}) => <Text style={styles.recentItem}>{<this.SearchIcon/>} {item.key}</Text>}
			/>
		</View>
	);

	render() {
		return (
			<View style={styles.view}>
				<this.Title/>
				<this.SearchField/>
				<this.SearchResults/>
				<this.RecentSearch/>
				<this.Separator/>
				<this.ResentSearchList/>
				<NavigationFooter/>
			</View>
		);
	}
}

export default withNavigation(Search);