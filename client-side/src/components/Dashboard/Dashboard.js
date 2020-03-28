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

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            loading: false
        };
    }

    componentWillMount = async () => {
        // Reset events list
        this.setState({events: [], loading: true});

        const account = JSON.parse(await AsyncStorage.getItem('account'));
        console.log('ACCOUNT INFO: ', account);

        // Collect events list
        const { events } = account;
        if (events) {
            events.forEach(e => {
                Https.GET(`event/${e}`)
                .then(res => res.data.data)
                .then(data => this.setState({events: this.state.events.concat([data]), loading: false}));
            });
        } else {
            this.setState({loading: false});
        }
        this.props.navigation.addListener('willFocus', this.load)
    };

    load = () => {
        console.log('refreshing');
        this.componentWillMount();
    }

    routeToEventDetail = () => {
        console.log('Here');
    };

    EventDetailView = (events) => {
        let eventList = [];
        if (events.length > 0) {
            events.forEach((event, index) => {
                eventList.push(
                    <TouchableOpacity key={index} onPress={()=>this.routeToEventDetail}>
                        <View style={styles.eventDetailView}>
                            <View style={styles.leftSide}>
                                <Text style={styles.bigTitle}>{event.major}</Text>
                                <Text style={styles.bigTitle}>{event.coursenumber}</Text>
                            </View>
                            <View style={styles.middleSide}>
                                <Text style={styles.smallTitle}>Host by: {event.host}</Text>
                                <Text style={styles.smallTitle}>{`Time: ${event.time.time} - ${event.time.date}`}</Text>
                                <Text style={styles.smallTitle}>{`Location: ${event.location.address} ${event.location.city} ${event.location.zip}`}</Text>
                                <Text style={styles.smallTitle}>Members: {event.members.length}/50</Text>
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
    deleteEvent = async (event) => {
        const events = this.state.events.filter(item => item.id != event.id);
        this.setState({events : events});
        const account = JSON.parse(await AsyncStorage.getItem('account'));
        account.events = account['events'].filter(item => item !== event.id);
        await AsyncStorage.setItem('account', JSON.stringify(account));
        await Https.PUT(`account/${account.id}`, {account});
    };

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        })
    };

    DisplayEvents = () => {
        const { loading, events } = this.state;
        const [refreshing, setRefreshing] = useState(false);

        const onRefresh = useCallback(() => {
            setRefreshing(true);
            this.load();
            this.wait(2000).then(() => setRefreshing(false));
        }, [refreshing]);

        return (
            <View style={styles.dataView}>
                <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    {loading &&
                        <View>
                            <ActivityIndicator style={{marginTop: '10%'}} animating={true} color={'#21CD99'} size={40} />
                            <Text style={styles.loadingText}>Loading...</Text>
                        </View>
                    }
                    {!loading &&this.EventDetailView(this.state.events)}
                    {(!loading && events.length === 0) && <Text style={styles.noDataText}>No data found</Text>}
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