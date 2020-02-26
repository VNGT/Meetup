import React, { Component, Fragment } from 'react';
import { View, SafeAreaView }  from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './ResetPassword.style.js';
import MAGIC from '../../constants/en_US.json';
import TopGreenRectangle from '../../directives/TopGreenRectangle';
import CardWithField from '../../directives/CardWithField';

class ResetPassword extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <Fragment>
                <SafeAreaView style={styles.safeAreaTop} />
                <SafeAreaView>
                    <View style={styles.loginView}>
                        <TopGreenRectangle
                            setHeight={300}
                            setTitle={MAGIC.FORGET_PASS.TITLE}
                            setSub={MAGIC.FORGET_PASS.SUBTITLE}
                            showBackArrow={true}
                        />
                        <CardWithField setCard={4} />
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default withNavigation(ResetPassword);