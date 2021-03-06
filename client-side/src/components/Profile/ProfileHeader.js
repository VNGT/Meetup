import React, { Component }  from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Profile.style.js';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';

class ProfileHeader extends Component {

    // Show page header view
    pageHeaderView = () => {
        const { email, profileImage, fullName } = this.props.userData;
        return (
            <View style={styles.headerView}>
                <TouchableOpacity style={styles.logoutButton} onPress={()=>this.logoutLogic()}>
                    <Icon name={'exit-to-app'} size={30} />
                </TouchableOpacity>
                <Image style={styles.profileImage} source={{uri: profileImage}} />
                <Text style={styles.fullName}>{fullName}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        );
    };

    logoutLogic = _ => AsyncStorage.clear().then(_ => this.props.navigation.navigate('WelcomePage'));

    render () {
        const { height } = this.props;
        return (
            <View style={[styles.profileHeaderView, {height}]}>
                <this.pageHeaderView />
            </View>
        );
    }
};

export default withNavigation(ProfileHeader);