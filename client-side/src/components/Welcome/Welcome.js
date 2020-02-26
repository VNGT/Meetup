import React, { Component, Fragment } from 'react';
import { View, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './Welcome.style';
import TopGreenRectangle from '../../directives/TopGreenRectangle';
import CardWithField from '../../directives/CardWithField';

class Welcome extends Component {

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
                <SafeAreaView style={styles.safeAreaBottom}>
                    <View style={styles.welcomeView}>
                    <TopGreenRectangle
                        setHeight={350}
                        showBackArrow={false}
                        showBannerImage={true}
                    />
                    <CardWithField setCard={1}/>
                    </View>
                </SafeAreaView>
            </Fragment>
        );
    }
}

export default withNavigation(Welcome);