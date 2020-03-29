import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
import NavigationFooter from '../../directives/NavigationFooter';

class SearchDetail extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        events: []
    };

    eventOnPress = (eventDetail) => {
        const { navigation } = this.props;
    };

    EventListDisplay = () => {
        let eventList = [];
        // AsyncStorage.getItem('events')
        // .then(events => {
        let events = ['', '', '', '', '', ''];
            if (events.length > 0) {
                events.forEach((event, i) => {
                    eventList.push(
                        <TouchableOpacity key={i}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flex: 10}}>
                                    <View style={{margin: 20}}>
                                        <Text style={styles.eventTitle}>CS 1332 Exam</Text>
                                        <Text style={styles.eventContent}>Friday, 15th, 2020</Text>
                                        <Text style={styles.eventContent}>19:00 PM</Text>
                                        <Text style={styles.eventContent}>20 Attends</Text>
                                    </View>
                                </View>
                                <View style={{flex: 2}}>
                                    <Icon style={styles.iconSpec} name={'chevron-right'} />
                                </View>
                            </View>
                            <View style={styles.br} />
                        </TouchableOpacity>
                    );
                })
            } else {
                eventList.push(
                    <Text>No Result Found</Text>
                );
            }
        // })
        return eventList;
    };

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginTop: '4%'}} onPress={()=>navigation.goBack()}>
                        <Icon name={'chevron-left'} style={{fontSize: 50}} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Result</Text>
                </View>
                <View style={styles.br} />
                <ScrollView>
                    {this.EventListDisplay()}
                </ScrollView>
                <NavigationFooter/>
            </SafeAreaView>
        )
    };
};

const styles = StyleSheet.create({
    title: {
        marginTop: '4%',
        marginLeft: '3%',
        fontSize: 40,
        fontWeight: 'bold'
    },
    br: {
        width: '100%',
        height: 1,
        backgroundColor: '#C3C3C3',
        marginTop: '2%'
    },
    eventTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    eventContent: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: 3,
    },
    iconSpec: {
        marginLeft: 15,
        marginTop: 55,
        fontSize: 45
    }
});

export default withNavigation(SearchDetail);