import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ScrollView, Platform } from 'react-native';
import { Dialog, Portal } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import { POST } from '../../services/Https';
import DimissKeyboard from '../../directives/DimissKeyboard';

export default class CreateEvent extends Component {

    state = {
        title: '',
        major: '',
        coursenumber: '',
        time: '',
        date: '',
        location: '',
        size: '',
        description: ''
    };

    onChangeText = (name, text) => {
        this.setState({[name]: text});
    };

    InformationView = () => {
        const { title, details, date, size, major, course, location, time } = this.state;
        return (
            <View style={{marginLeft: '5%', marginTop: '5%', height: '100%'}}>
                <Text style={styles.sectionTitle}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={'CS 1331 Exam'}
                    onChangeText={text=>this.onChangeText('title', text)}
                    value={title}
                />
                <View style={styles.typeLine} />
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 6}}>
                        <Text style={styles.sectionTitle}>Major</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'Computer Science'}
                            value={major}
                            onChangeText={text=>this.onChangeText('major', text)}
                        />
                        <View style={styles.typeLine} />
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={styles.sectionTitle}>Course number</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'1331'}
                            value={course}
                            onChangeText={text=>this.onChangeText('coursenumber', text)}
                        />
                        <View style={styles.typeLine} />
                    </View>
                </View>
                <Text style={[styles.sectionTitle, {marginTop: 20}]}>Time</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 6}}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'14:00 PM'}
                            value={time}
                            onChangeText={text=>this.onChangeText('time', text)}
                        />
                        <View style={styles.typeLine} />
                    </View>
                    <View style={{flex: 6}}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'22 January 2020'}
                            value={date}
                            onChangeText={text=>this.onChangeText('date', text)}
                        />
                        <View style={styles.typeLine} />
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 6}}>
                        <Text style={styles.sectionTitle}>Location</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'e.g Clough 144'}
                            value={location}
                            onChangeText={text=>this.onChangeText('location', text)}
                        />
                        <View style={styles.typeLine} />
                    </View>
                    <View style={{flex: 6}}>
                        <Text style={styles.sectionTitle}>Group Size</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'20'}
                            value={size}
                            onChangeText={text=>this.onChangeText('size', text)}
                        />
                        <View style={styles.typeLine} />
                    </View>
                </View>
                <Text style={[styles.sectionTitle, {marginTop: 20}]}>Description</Text>
                <TextInput
                    multiline={true}
                    style={{fontSize: 20, marginTop: 10, width: '95%', height: Platform.OS === 'ios' ? '25%' : '10%', borderWidth: 1, borderRadius: 5}}
                    placeholder={'Enter Event Detail'}
                    value={details}
                    onChangeText={text=>this.onChangeText('description', text)}
                />
                <View style={{flexDirection: 'row', marginTop: '20%', marginBottom: '10%'}}>
                    <TouchableOpacity onPress={this.props._hideDialog} style={{backgroundColor: '#C3C3C3', borderRadius: 25, bottom: 0, left: 0, marginRight: '5%', width: 75, position: 'absolute'}}>
                        <Text style={{marginLeft: 20, marginRight: 20, marginTop: 15, marginBottom: 15, color: 'red', textAlign: 'center'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.createNewEvent} style={{backgroundColor: '#21CD99', borderRadius: 25, bottom: 0, right: 0, marginRight: '5%', width: 75, position: 'absolute'}}>
                        <Text style={{marginLeft: 20, marginRight: 20, marginTop: 15, marginBottom: 15, color: 'white', textAlign: 'center'}}>Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    createNewEvent = async () => {
        const account = JSON.parse(await AsyncStorage.getItem("account"))
        const hostID = account["id"]
        let event = {
            "host": hostID,
            "time": {
                "date": "",
                "time": ""
            },
            "eventCreator": account["firstname"] + " " + account["lastname"],
            "members": [hostID]
        }
        for (var key of Object.keys(this.state)) {
            if (key == "time" || key == "date") {
                event.time[key] = this.state[key];
            } else {
                event[key] = this.state[key]
            }
        }
        await POST("event", event);
        this.props._hideDialog();
    };

    render() {
        return (
            <Portal>
                <Dialog
                    style={styles.dialog}
                    visible={this.props.visible}
                    onDismiss={this.props._hideDialog}>
                    <DimissKeyboard><Text style={styles.title}>Create Event</Text></DimissKeyboard>
                    <View style={styles.br} />
                    <ScrollView><this.InformationView/></ScrollView>
                </Dialog>
            </Portal>
        )
    };
};

const styles = StyleSheet.create({
    dialog: {
        width: '100%',
        alignSelf: 'center',
        height: '93%',
        bottom: Platform.OS === 'ios' ? 0 : -50,
        position: 'absolute'
    },
    br: {
        width: '100%',
        height: 1,
        backgroundColor: '#C3C3C3',
        marginTop: '2%'
    },
    title: {
        marginLeft: '5%',
        marginTop: '5%',
        fontSize: 35,
        fontWeight: 'bold'
    },
    typeLine: {
        width: '90%',
        height: 1,
        backgroundColor: '#C3C3C3',
        marginTop: '1%'
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput: {
        fontSize: 20,
        marginTop: 10,
        width: '90%'
    }
});
