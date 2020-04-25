import React, { Component, Fragment, useState } from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './Search.style.js';
import NavigationFooter from '../../directives/NavigationFooter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GET, POST, PUT } from '../../services/Https';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native-paper';
Icon.loadFont();
import DimissKeyboard from '../../directives/DimissKeyboard';

class Search extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			searchQuery: null,
			allowToSearch: false,
			searchResults: [],
			loading: false,
			account: null
		};

		this.searchInput = React.createRef();
	}

	componentDidMount = async () => {
		this.setState({account: JSON.parse(await AsyncStorage.getItem("account"))});
	}

	Title = () => (
		<DimissKeyboard>
			<Text style={styles.title}>Search</Text>
		</DimissKeyboard>
	);

	RecentSearch = () => (
		<DimissKeyboard>
			<Text style={styles.recentSearch}>Recent Searches</Text>
		</DimissKeyboard>
	);

	SearchField = () => (
		<DimissKeyboard>
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
		</DimissKeyboard>
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
		this.setState({loading : true});
		const { searchQuery } = this.state;
		var query = searchQuery.replace(" ", "_");
		GET(`event/search/${query}`).then(res => {
			if (res.status != '200' || res.status != 200) {
				console.log('NOT FOUND');
			} else {
				this.setState({ searchResults: res.data.data ? res.data.data : []});
			}
			this.setState({ loading : false });
		}).catch(err => {
			console.log(err);
			this.setState({ loading : false });
		});
	};

	SearchResults = () => {
		const { searchResults } = this.state;
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

    routeToEventDetail = (event) => {
        const { navigation } = this.props;
        navigation.navigate('EventDetailPage', { eventDetail: event});
    };

	EventDetailView = (events) => {
		const {account} = this.state;
		let eventList = [];
        if (events.length > 0) {
            events.forEach((event, index) => {
				const EventButton = () => {
					if (account["events"].includes(event.id)) {
						return (
							<TouchableOpacity onPress={()=>this.deleteEvent(event)}>
								<Icon name="remove-circle-outline" size={30} color="#21CD99"/>
							</TouchableOpacity>
						)
					} else {
						return (
							<TouchableOpacity onPress={()=>this.addEvent(event)}>
								<Icon name="add-circle-outline" size={30} color="#21CD99"/>
							</TouchableOpacity>
						)
					}
				}
                eventList.push(
                    <TouchableOpacity key={index} onPress={()=>this.routeToEventDetail(event)}>
                        <View style={styles.eventDetailView}>
                            <View style={styles.leftSide}>
                                <Text style={styles.bigTitle}>{event.major}</Text>
                                <Text style={styles.bigTitle}>{event.coursenumber}</Text>
                            </View>
                            <View style={styles.middleSide}>
								<Text style={styles.smallTitleBold}>{event.title}</Text>
                                <Text style={styles.smallTitle}>Host by: {event.host}</Text>
                                <Text style={styles.smallTitle}>{`Time: ${event.time.time} - ${event.time.date}`}</Text>
                                <Text style={styles.smallTitle}>{`Location: ${event.location}`}</Text>
                                <Text style={styles.smallTitle}>Members: {event.members.length}/{event.size}</Text>
                            </View>
							<View style={styles.rightSide}>
								<EventButton />
							</View>
                        </View>
                        <View style={styles.breakLine}/>
					</TouchableOpacity>
                );
            });
            return eventList;
        }

        return null;
	};

	addEvent = async (event) => {
		const account = JSON.parse(await AsyncStorage.getItem("account"));
		account["events"].push(event["id"]);
		await POST("account/addEvent", account);
		this.setState({account: account})
		await AsyncStorage.setItem("account", JSON.stringify(account));
	};

	deleteEvent = async (event) => {
        const account = JSON.parse(await AsyncStorage.getItem('account'));
		account.events = account['events'].filter(item => item !== event.id);
		this.setState({account: account})
        await AsyncStorage.setItem('account', JSON.stringify(account));
        await PUT(`account/deleteEvent/${account.id}`, {account});
    };

    DisplaySearchResult = () => {
		const { loading } = this.state;
		const events = this.state.searchResults;

		const WhichViewToDisplay = () => {
            if (!loading && events.length === 0 && !refreshing) {
                return (<Text style={styles.noDataText}>No event found</Text>);
            }
            return this.EventDetailView(this.state.searchResults)
        };

        return (
            <View style={styles.dataView}>
                <ScrollView>
                    {loading ?
                        <View>
                            <ActivityIndicator style={{marginTop: '10%'}} animating={true} color={'#21CD99'} size={40} />
                            <Text style={styles.loadingText}>Loading...</Text>
                        </View>
						:<WhichViewToDisplay />
                    }
                </ScrollView>
            </View>
        );
    };

	renderSeparator = () => <View style={styles.renderSeperator} />;

	RecentIcon = () => (
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
				renderItem={({item}) => <Text style={styles.recentItem}>{<this.RecentIcon/>} {item.key}</Text>}
			/>
		</View>
	);

	render() {
		const { searchResults } = this.state;
		return (
			<Fragment>
				<SafeAreaView style={styles.topSafe}/>
				<SafeAreaView style={styles.bottomSafe}>
					<this.Title/>
					<this.SearchField/>
					{ searchResults.length !== 0 ?
						<this.DisplaySearchResult/>
						: <View>
							<this.RecentSearch/>
							<View style={styles.separator}/>
							<this.ResentSearchList/>
						</View>
					}
					<NavigationFooter/>
				</SafeAreaView>
			</Fragment>
		);
	}
}

export default withNavigation(Search);