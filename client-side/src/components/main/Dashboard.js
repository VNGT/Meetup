import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/dashboard.style';
import MAGIC from '../../constants/en_US';
import NavigationFooter from '../../directives/NavigationFooter.js';

class Dashboard extends Component {

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
        this.state = {  };
    }

    EventDetailDisplay = () => (
        <View>
            
        </View>
    );

    DataViewRender = () => (
        <View>
            <View style={styles.dataView}>
                <Text>ssss</Text>
            </View>
        </View>
    );

    render() {
        return (
            <View style={styles.safeAreaTop}>
            <this.DataViewRender/>
            <NavigationFooter />
            </View>
        );
    }
}

export default withNavigation(Dashboard);