import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../../styles/login.style';
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
            <View style={styles.welcomeView}>
            <TopGreenRectangle
                setHeight={350}
                showBackArrow={false}
                showBannerImage={true}
            />
            <CardWithField setCard={1}/>
            </View>
        );
    }
}

export default withNavigation(Welcome);