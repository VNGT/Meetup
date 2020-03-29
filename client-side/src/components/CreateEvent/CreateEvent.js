import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Dialog, Portal } from 'react-native-paper';

export default class CreateEvent extends Component {

    state = {
        title: '',
        major: '',
        course: '',
        time: '',
        date: '',
        location: '',
        size: '',
        details: ''
    };

    onChangeText = (name, text) => {
        this.setState({[name]: text}, () => {
            console.log(name, text);
        });
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
                        <Text style={styles.sectionTitle}>Course</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'1331'}
                            value={course}
                            onChangeText={text=>this.onChangeText('course', text)}
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
                <Text style={[styles.sectionTitle, {marginTop: 20}]}>Details</Text>
                <TextInput
                    multiline={true}
                    style={{fontSize: 20, marginTop: 10, width: '95%', height: '25%', borderWidth: 1, borderRadius: 5}}
                    placeholder={'Enter Event Detail'}
                    value={details}
                    onChangeText={text=>this.onChangeText('details', text)}
                />
                <View style={{flexDirection: 'row', marginTop: '10%'}}>
                    <TouchableOpacity onPress={this.props._hideDialog} style={{backgroundColor: '#C3C3C3', borderRadius: 25, position: 'absolute', width: 100}}>
                        <Text style={{marginLeft: 20, marginRight: 20, marginTop: 15, marginBottom: 15, color: 'red', textAlign: 'center'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.createNewEvent} style={{backgroundColor: '#21CD99', borderRadius: 25, right: 0, position: 'absolute', marginRight: '5%', width: 75}}>
                        <Text style={{marginLeft: 20, marginRight: 20, marginTop: 15, marginBottom: 15, color: 'white', textAlign: 'center'}}>Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    createNewEvent = () => {
        // TODO: Create new event
    };

    render() {
        return (
            <Portal>
                <Dialog
                    style={styles.dialog}
                    visible={this.props.visible}
                    onDismiss={this.props._hideDialog}>
                    <Text style={styles.title}>Create Event</Text>
                    <View style={styles.br} />
                    <this.InformationView />
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
        bottom: 0,
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