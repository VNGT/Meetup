import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './Profile.style.js';
import NavigationFooter from '../../directives/NavigationFooter.js';
import ProfileHeader from './ProfileHeader';
import CardWithField from '../../directives/CardWithField';
import AsyncStorage from '@react-native-community/async-storage';
import Https from '../../services/Https';

class Profile extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        fullName: null,
        email: null,
        profileImage: '',
        firstname: null,
        lastname: null,
        major: 'CS', // leave it for now
    };

    componentDidMount = async() => {
        const account = JSON.parse(await AsyncStorage.getItem('account'));
        const { firstname, lastname, email } = account;
        const fullName = `${firstname} ${lastname}`;
        const profileAvatar = await Https.GETAVATAR(fullName);
        this.setState({firstname, lastname, email, fullName, profileImage: profileAvatar.config.url});
    };

    render() {
        return (
            <View style={styles.safeAreaBottom}>
                <ProfileHeader
                    height={Platform.OS === 'ios' ? 400 : 320}
                    userData={this.state}
                />
                <CardWithField setCard={7} userData={this.state} />
                <NavigationFooter />
            </View>
        );
    }
}

export default withNavigation(Profile);