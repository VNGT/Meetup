import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/dashboard.style';
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

    componentDidMount = () => {
        Https.GET('event')
        .then(res => {
            this.setState({events: res.data.data});
        })
        .catch(err => {
            console.log(err);
        })
    };

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
            <View style={styles.safeAreaTop}>
            <this.DataViewRender/>
            <NavigationFooter />
            </View>
        );
    }
}

export default withNavigation(Dashboard);