import React, { Component }  from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/profile.style';
import BackButton from './BackButton';
const profileImg = '../styles/assets/profileTemplate.png';

export default class ProfileHeader extends Component {

    // Show page header view
    pageHeaderView = () => (
        <View style={styles.headerView}>
            <Image style={styles.profileImage} source={require(profileImg)} />
            <Text style={styles.fullName}>{this.props.setFirstName} {this.props.setLastName}</Text>
            <Text style={styles.email}>{this.props.setEmail}</Text>
        </View>
    );

    // Show back arrow view
    showBackArrowOrNot = () => {
        return (this.props.showBackArrow) ? <BackButton /> : <View/>;
    };

    render () {
        return (
            <View style={[styles.profileHeaderView, {height: this.props.setHeight}]}>
                <this.showBackArrowOrNot />
                <this.pageHeaderView />
            </View>
        );
    }
};