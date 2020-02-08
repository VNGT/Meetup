import React, { Component }  from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/login.style';
import BackButton from './BackButton';
const bannerImage = '../styles/assets/friends.png';

export default class TopGreenRectangle extends Component {

    // Show page title view
    pageTitleView = () => (
        <View style={styles.titleView}>
            <Text style={styles.title}>{this.props.setTitle}</Text>
            <Text style={styles.subtitle}>{this.props.setSub}</Text>
        </View>
    );

    // Show back arrow view
    showBackArrowOrNot = () => {
        return (this.props.showBackArrow) ? <BackButton /> : <View/>;
    };

    // Show banner image view
    showBanner = () => {
        if (this.props.showBannerImage) {
            return <Image style={styles.bannerImageSpec} source={require(bannerImage)} />;
        }
        return <View/>;
    };

    render () {
        return (
            <View style={[styles.topGreenRectangleView, {height: this.props.setHeight}]}>
                <this.showBackArrowOrNot />
                <this.showBanner />
                <this.pageTitleView />
            </View>
        );
    }
};