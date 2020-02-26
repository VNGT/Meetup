import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import styles from '../styles/login.style';
import MAGIC from '../constants/en_US';
const facebookImg = '../styles/assets/facebook.png';
const googleImg = '../styles/assets/google.png';

export default class ConnectServiceView extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    connectWithOtherService = () => (
        <View style={styles.connectView}>
            <View style={styles.hairline} />
            <Text style={styles.connectText}>{MAGIC.LOGIN.CONNECT}</Text>
            <View style={styles.hairline} />
        </View>
    );

    connectWithFb = () => {
        // TODO:
    };

    connectWithGg = () => {
        // TODO:
    };

    thirdPartyServiceProvider = () => (
        <View style={styles.thirdPartyServiceView}>
            <View style={styles.serviceRowSpec}>
                <TouchableOpacity style={styles.serviceImgMargin}
                    onPress={this.connectWithFb}>
                    <Image style={styles.serviceImg} source={require(facebookImg)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.serviceImgMargin}
                    onPress={this.connectWithGg}>
                    <Image style={styles.serviceImg} source={require(googleImg)} />
                </TouchableOpacity>
            </View>
        </View>
    );

    render() {
        return (
            <View>
                <this.connectWithOtherService />
                <this.thirdPartyServiceProvider />
            </View>
        );
    }
};