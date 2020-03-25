import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';
import styles from './Dashboard.style.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Https from '../../services/Https';
import NavigationFooter from '../../directives/NavigationFooter.js';
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
        };
    }

    componentWillMount = async () => {
        this.setState({ events: [] });
        const account = JSON.parse(await AsyncStorage.getItem('account'));
        console.log('ACCOUNTTTT:        ', account);
        account['events'].forEach(e => {
            Https.GET('event/' + e).then(res => {
                this.setState({
                    events: this.state.events.concat([res.data.data])
                })
            });
        });
        this.props.navigation.addListener('willFocus', this.load)
    };

    load = () => {
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
									<Icon name="remove-circle-outline" size={30} color="#21CD99"/>
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

    deleteEvent = async (event) => {
        var events = this.state.events.filter(function(item) { return item.id != event.id; }); 
        this.setState({events : events});
        const account = JSON.parse(await AsyncStorage.getItem("account"));
        account.events = account["events"].filter(item => item !== event.id)
        await Https.PUT("account/" + account.id, {account} )
        await AsyncStorage.setItem("account", JSON.stringify(account))
	};

    DisplayEvents = () => {
        return (
            <ScrollView>
                {this.EventDetailView(this.state.events)}
            </ScrollView>
        );
    };

    DataViewRender = () => (
        <View>
            <View style={styles.dataView}>
                <this.DisplayEvents />
            </View>
        </View>
    );

    render() {
        return (
            <View style={styles.safeAreaBottom}>
                <this.DataViewRender/>
                <NavigationFooter />
            </View>
        );
    }
}

export default withNavigation(Dashboard);