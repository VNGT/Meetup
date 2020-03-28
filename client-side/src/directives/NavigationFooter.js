import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../styles/navFooter.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

class NavigationFooter extends Component {

    createEvent = () => {
        // TODO:
    };

    floatButton = () => {
        return (
            <View style={styles.floatButtonView}>
                <TouchableOpacity onPress={this.createEvent}>
                    <Icon style={styles.addEventButtonSpec} name='add' />
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[styles.navFooterView, styles.stickAtBottom]}>
                <TouchableOpacity onPress={()=>navigate('DashboardPage')}>
                    <Icon style={styles.iconSpecL} name='dashboard' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigate('SearchPage')}>
                    <Icon style={styles.iconSpecL} name='search' />
                </TouchableOpacity>
                <this.floatButton />
                <TouchableOpacity onPress={()=>navigate('DashboardPage')}>
                    <Icon style={styles.iconSpecR} name='notifications-none' />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigate('ProfilePage')}>
                    <Icon style={styles.iconSpecL} name='perm-identity' />
                </TouchableOpacity>
            </View>
        );
    }
};

export default withNavigation(NavigationFooter);