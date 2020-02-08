import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import MAGIC from '../../constants/en_US';
import styles from '../../styles/login.style';
import TopGreenRectangle from '../../directives/TopGreenRectangle';
import CardWithField from '../../directives/CardWithField';
import ConnectServiceView from '../../directives/ConnectServiceView';

class Login extends Component {

    // Disable navigation header
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {  };
    };

    moveToSignupPage = () => this.props.navigation.navigate('SignupPage');

    haveAccountYet = () => (
        <View style={styles.haveAccountYetView}>
            <Text style={styles.haveAccountYetTextSpec0}>{MAGIC.LOGIN.HAVE_ACCOUNT_YET}</Text>
            <TouchableOpacity onPress={this.moveToSignupPage}>
                <Text style={styles.haveAccountYetTextSpec1}>{MAGIC.LOGIN.SIGN_UP}</Text>
            </TouchableOpacity>
        </View>
    );


    render() {
        return (
            <View style={styles.loginView}>
                <TopGreenRectangle
                    setHeight={290}
                    setTitle={MAGIC.LOGIN.TITLE}
                    setSub={MAGIC.LOGIN.SUBTITLE}
                    showBackArrow={true}
                />
                <CardWithField setCard={2} />
                <ConnectServiceView />
                <this.haveAccountYet />
            </View>
        );
    }
}

export default withNavigation(Login);