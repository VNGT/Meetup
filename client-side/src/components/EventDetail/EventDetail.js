import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();
import StudyPNG from '../../styles/assets/study.png';
import Profile from '../../styles/assets/profileTemplate.png';
import NavigationFooter from '../../directives/NavigationFooter';

class EventDetail extends Component {

    static navigationOptions = {
        header: null
    }

    state = {
        join: false,
        eventDetail: {}
    };

    componentWillMount = () => {
        this.setState({eventDetail: this.props.navigation.state.params.eventDetail});
    };

    toggleOnPress = () => {
        this.setState({join: !this.state.join}, () => {
            const { join } = this.state;

            // TODO: Query update client list
        });
    };

    EventContentView = () => {
        const { location, time } = this.state.eventDetail;
        return (
            <View style={styles.contentView}>
                <View style={{flexDirection: 'row'}}>
                    <Icon style={styles.icon} name={'account-circle'} /><Text style={styles.contentText}>John Doe</Text>
                </View>
                <Text style={styles.subContent}>TA</Text>
                <View style={{flexDirection: 'row', marginTop: '5%'}}>
                    <Icon style={styles.icon} name={'add-alarm'} /><Text style={styles.contentText}>{time.date}</Text>
                </View>
                <Text style={styles.subContent}>{time.time}</Text>
                <View style={{flexDirection: 'row', marginTop: '5%'}}>
                    <Icon style={styles.icon} name={'add-location'} /><Text style={styles.contentText}>{'Culc'}</Text>
                </View>
                <Text style={styles.subContent}>266 4th St NW, Atlanta, GA 30313</Text>
            </View>
        );
    };

    EventBottomContent = () => {
        const { description, members } = this.state.eventDetail;
        return (
            <View style={styles.contentView}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>{`${members.length} people are going`}</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                    <Image style={styles.circleImg} source={Profile}/>
                    <View style={[styles.circleImg, {backgroundColor: '#C3C3C3', marginLeft: 10}]}><Text style={{fontSize: 20, marginTop: 10, marginLeft: 8}}>{`+${members.length - 1}`}</Text></View>
                </View>
                <Text style={{fontSize: 25, fontWeight: 'bold', marginTop: 20}}>Details</Text>
                <Text style={{fontSize: 20, marginTop: 5, marginBottom: 50}}>{description}</Text>
            </View>
        );
    };

    render() {
        const { join } = this.state;
        const { navigation } = this.props;
        const { coursenumber, major } = this.state.eventDetail;
        const eventTitle = `${major} ${coursenumber}`;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginTop: '4%'}} onPress={()=>navigation.goBack()}>
                        <Icon name={'chevron-left'} style={{fontSize: 50}} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Event</Text>
                </View>
                <Image style={{marginTop: 20}} source={StudyPNG} />
                <ScrollView>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <Text style={styles.eventTitle}>{eventTitle}</Text>
                        <TouchableOpacity onPress={this.toggleOnPress} style={[styles.button, {backgroundColor: (!join) ? 'green' : 'gray'}]}>
                            <Text style={{margin: 8, textAlign: 'center'}}>{(!join) ? 'Join' : 'Leave'}</Text>
                        </TouchableOpacity>
                    </View>
                    <this.EventContentView />
                    <this.EventBottomContent />
                </ScrollView>
                <NavigationFooter />
            </SafeAreaView>
        )
    };
};

const styles = StyleSheet.create({
    title: {
        marginTop: '4%',
        marginLeft: '2%',
        fontSize: 40,
        fontWeight: 'bold'
    },
    button: {
        borderRadius: 25,
        marginRight: 20,
        width: 60,
        right: 0,
        position: 'absolute'
    },
    eventTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: '5%',
    },
    contentView: {
        marginLeft: '5%',
        marginTop: '5%',
    },
    icon: {
        fontSize: 25
    },
    contentText: {
        fontSize: 20,
        marginLeft: '5%',
    },
    subContent: {
        color: 'gray',
        fontSize: 20,
        marginLeft: '12%',
        marginTop: '2%'
    },
    circleImg: {
        width: 45,
        height: 45,
        borderRadius: 50,
    }
});

export default withNavigation(EventDetail);
