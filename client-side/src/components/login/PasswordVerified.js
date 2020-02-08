import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import TopGreenRectangle from '../../directives/TopGreenRectangle';
import CardWithField from '../../directives/CardWithField';
import styles from '../../styles/login.style';

class PasswordVerified extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.loginView}>
                <TopGreenRectangle
                    setHeight={250}
                />
                <CardWithField setCard={6} />
            </View>
        );
    }
}

export default withNavigation(PasswordVerified);