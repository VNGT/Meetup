import React, { Component }  from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Profile.style.js';

export default class ProfileHeader extends Component {

    // Show page header view
    pageHeaderView = () => {
        const { email, profileImage, firstName, lastName } = this.props.userData;
        return (
            <View style={styles.headerView}>
                <Image style={styles.profileImage} source={profileImage} />
                <Text style={styles.fullName}>{firstName} {lastName}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        );
    };

    render () {
        const { height } = this.props;
        return (
            <View style={[styles.profileHeaderView, {height}]}>
                <this.pageHeaderView />
            </View>
        );
    }
};