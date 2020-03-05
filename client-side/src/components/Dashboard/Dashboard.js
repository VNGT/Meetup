import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './Dashboard.style.js';
import MAGIC from '../../constants/en_US';
import Https from '../../services/Https';
import NavigationFooter from '../../directives/NavigationFooter.js';

class Dashboard extends Component {

    static navigationOptions = {
        title: `Let's Meet`,
        headerStyle: {
            backgroundColor: '#21CD99',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentWillMount = async () => {
        this.setState({ events: [] });
        const account = JSON.parse(await AsyncStorage.getItem("account"));
        account["events"].forEach(e => {
            Https.GET("event/" + e).then(res => {
                this.setState({
                    events: this.state.events.concat([res.data.data])
                })
            });
        });
        this.props.navigation.addListener('willFocus', this.load)
    };

    load = () => {
        this.componentWillMount()
    }

    routeToEventDetail = () => {
        console.log('Here');
    };

    EventDetailView = (events) => {
        let eventList = [];
        if (events.length > 0) {
            events.forEach(event => {
                eventList.push(
                    <TouchableOpacity onPress={()=>this.routeToEventDetail}>
                        <View style={styles.eventDetailView}>
                            <View style={styles.leftSide}>
                                <Text style={styles.bigTitle}>{event.major}</Text>
                                <Text style={styles.bigTitle}>{event.coursenumber}</Text>
                            </View>
                            <View style={styles.rightSide}>
                                <Text style={styles.smallTitle}>Host by: {event.host}</Text>
                                <Text style={styles.smallTitle}>{`Time: ${event.time.time} - ${event.time.date}`}</Text>
                                <Text style={styles.smallTitle}>{`Location: ${event.location.address} ${event.location.city} ${event.location.zip}`}</Text>
                                <Text style={styles.smallTitle}>Members: {event.members.length}/50</Text>
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