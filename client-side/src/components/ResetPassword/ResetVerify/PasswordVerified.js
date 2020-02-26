import React, { Component, Fragment } from 'react';
import { View, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import TopGreenRectangle from '../../../directives/TopGreenRectangle';
import CardWithField from '../../../directives/CardWithField';
import styles from './PasswordVerify.style.js';

class PasswordVerified extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Fragment>
                <SafeAreaView style={styles.safeAreaTop} />
                <SafeAreaView style={styles.safeAreaBottom}>
                    <View style={styles.loginView}>
                        <TopGreenRectangle
                            setHeight={250}
                        />
                        <CardWithField setCard={6} />
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default withNavigation(PasswordVerified);