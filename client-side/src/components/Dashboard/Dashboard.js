import React, { Component, useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, RefreshControl } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';
import styles from './Dashboard.style.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Https from '../../services/Https';
import NavigationFooter from '../../directives/NavigationFooter.js';
import { ActivityIndicator } from 'react-native-paper';

Icon.loadFont();

class Dashboard extends Component {

    static navigationOptions = {
        title: `Let's Meet`,
        headerStyle: {
            backgroundColor: '#21CD99',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        // Disable go back button on dashboard
        headerLeft: null
    };

    state = {
        events: [],
        loading: false,
    };

    // Lifecycle
    componentWillMount = async () => {
        this.setState({loading: true}, _ => setTimeout(_ => this.collectingEventData(), 2000));
    };

    // Collect events list
    collectingEventData = async () => {
        const accountId = JSON.parse(await AsyncStorage.getItem('account'))["id"];
        const account = (await Https.GET("account/" + accountId))["data"]["data"];
        AsyncStorage.setItem("account", JSON.stringify(account));
        const { events } = account;
        console.log('ACCOUNT INFO: ', account);
        console.log('Collecting data');

        // Reset event list
        this.setState({events: []}, _ => {
            if (events !== undefined) {
                events.forEach(e => {
                    Https.GET(`event/${e}`)
                    .then(res => res.data.data)
                    .then(data => this.setState({events: this.state.events.concat([data])}));
                });
            }
            this.setState({loading: false})
        });
        this.props.navigation.addListener('willFocus', this.collectingEventData)
    };

    routeToEventDetail = (event) => {
        const { navigation } = this.props;
        navigation.navigate('EventDetailPage', { eventDetail: event});
    };

    EventDetailView = () => {
        const { events } = this.state;
        let eventList = [];
        if (events.length > 0) {
            events.forEach((event, index) => {
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
								<TouchableOpacity onPress={()=>this.deleteEvent(event)}>
									<Icon name='remove-circle-outline' size={30} color='#21CD99'/>
								</TouchableOpacity>
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

    // Delete Event On Press
    deleteEvent = (event) => {
        const events = this.state.events.filter(item => item.id != event.id);
        this.setState({events : events}, async _ => {
            const account = JSON.parse(await AsyncStorage.getItem('account'));
            account.events = account['events'].filter(item => item !== event.id);
            await AsyncStorage.setItem('account', JSON.stringify(account));
            await Https.PUT(`account/deleteEvent/${account.id}`, {account});
        });
    };

    DisplayEvents = () => {
        const { loading, events } = this.state;
        const [refreshing, setRefreshing] = useState(false);

        // onRefresh control
        const onRefresh = useCallback(() => {
            setRefreshing(true);
            this.collectingEventData();
            setTimeout(() => setRefreshing(false), 2000);
        }, [refreshing]);

        // Decide which view to render
        const WhichViewToDisplay = () => {
            if (!loading && events.length === 0 && !refreshing) {
                return (<Text style={styles.noDataText}>No event found</Text>);
            }
            return this.EventDetailView();
        };

        return (
            <View style={styles.dataView}>
                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {loading &&
                        <View>
                            <ActivityIndicator style={{marginTop: '10%'}} animating={true} color={'#21CD99'} size={40} />
                            <Text style={styles.loadingText}>Loading...</Text>
                        </View>
                    }
                    <WhichViewToDisplay />
                </ScrollView>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.safeAreaBottom}>
                <this.DisplayEvents/>
                <NavigationFooter />
            </View>
        );
    }
}

export default withNavigation(Dashboard);