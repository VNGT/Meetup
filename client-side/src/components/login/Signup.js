import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/login.style';
import MAGIC from '../../constants/en_US';
import TopGreenRectangle from '../../directives/TopGreenRectangle';
import CardWithField from '../../directives/CardWithField';

class Signup extends Component {

    // Disable navigation header
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {  };
    }

    moveToLoginPage = () => this.props.navigation.navigate('LoginPage');

    haveAccountYet = () => (
        <View style={styles.haveAccountYetView}>
            <Text style={styles.haveAccountYetTextSpec0}>{MAGIC.SIGN_UP.ALREADY_HAVE_ACCT}</Text>
            <TouchableOpacity onPress={this.moveToLoginPage}>
                <Text style={styles.haveAccountYetTextSpec1}>{MAGIC.SIGN_UP.SIGN_IN}</Text>
            </TouchableOpacity>
        </View>
    );

    render() {
        return (
            <View style={styles.loginView}>
                <TopGreenRectangle
                    setHeight={260}
                    setTitle={MAGIC.SIGN_UP.TITLE}
                    setSub={MAGIC.SIGN_UP.SUBTITLE}
                    showBackArrow={true}
                />
                <CardWithField setCard={3} />
                <this.haveAccountYet />
            </View>
        );
    }
}

export default withNavigation(Signup);