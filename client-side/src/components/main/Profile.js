import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/dashboard.style';
import MAGIC from '../../constants/en_US';
import Https from '../../services/Https';
import NavigationFooter from '../../directives/NavigationFooter.js';
import ProfileHeader from '../../directives/ProfileHeader';
import CardWithField from '../../directives/CardWithField';
const profileImg = '../../styles/assets/profileTemplate.png';

class Profile extends Component {

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
            fullName: "Chau Phan",
            email: "chauphan@gatech.edu",
            profileImage: profileImg,
            firstName: "Chau",
            lastName: "Phan",
            major: "CS",
            events: []
        };
    }

    componentDidMount = () => {
        //TODO: get user
    };


    render() {
        return (
            <View style={styles.safeAreaTop}>
                <ProfileHeader
                    setHeight={380}
                    showBackArrow={false}
                    setProfileImage={this.state.profileImage}
                    setFirstName={this.state.firstName}
                    setLastName={this.state.lastName}
                    setMajor={this.state.major}
                    setEmail={this.state.email}
                />
                <CardWithField setCard={7} />
                <NavigationFooter />
            </View>
        );
    }
}

export default withNavigation(Profile);