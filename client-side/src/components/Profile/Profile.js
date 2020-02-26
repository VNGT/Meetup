import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './Profile.style.js';
import NavigationFooter from '../../directives/NavigationFooter.js';
import ProfileHeader from './ProfileHeader';
import CardWithField from '../../directives/CardWithField';
const profileImg = '../../styles/assets/profileTemplate.png';

class Profile extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            fullName: "Chau Phan",
            email: "chauphan@gatech.edu",
            profileImage: require(profileImg),
            firstName: "Chau",
            lastName: "Phan",
            major: "CS",
            events: []
        };
    }

    componentWillMount = () => {
        //TODO: get user
    };


    render() {
        return (
            <View style={styles.safeAreaBottom}>
                <ProfileHeader
                    height={400}
                    userData={this.state}
                />
                <CardWithField setCard={7} />
                <NavigationFooter />
            </View>
        );
    }
}

export default withNavigation(Profile);