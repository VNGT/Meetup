import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/button.style';
import { withNavigation } from 'react-navigation';
// import { ActivityIndicator } from 'react-native-paper';

class Button extends Component {

    state = {
        loading: false,
    };

    wait = (time) => {
        this.setState({loading: true});
        return new Promise(_ => {
            setTimeout(_ => {
                this.setState({loading: false});
            }, time);
        });
    };

    // Button style for login in welcome page
    buttonStyleDisplay = () => {
        const { buttonFunc, buttonText, buttonStyle } = this.props;
        const { loading } = this.state;

        return (
            <TouchableOpacity onPress={()=>this.decideButtonAction(buttonFunc)}>
                {buttonStyle === 0 &&
                    <View style={[styles.welcomeSignInSpec, styles.robinGreenColor]}>
                        <Text style={[styles.greenButtonSpec, styles.textColorWhite]}>{buttonText}</Text>
                    </View>
                }
                {buttonStyle === 1 &&
                    <View style={[styles.welcomeSignInSpec, styles.whiteView, {marginTop:20}]}>
                        <Text style={[styles.greenButtonSpec, styles.textColorGreen]}>{buttonText}</Text>
                    </View>
                }
                {buttonStyle === 2 &&
                    <View style={styles.buttonSpec}>
                        <Text style={styles.buttonTextSpec}>{buttonText}</Text>
                    </View>
                }
            </TouchableOpacity>
        );
    };

    decideButtonAction = func => {
        if (typeof func == 'string' && func.includes('Page')) {
            return this.props.navigation.navigate(func);
        } else {
            func();
        }
    };

    render() {
        return (
            <this.buttonStyleDisplay />
        );
    }
};

export default withNavigation(Button);