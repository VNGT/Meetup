import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/button.style';
import { withNavigation } from 'react-navigation';

class Button extends Component {

    buttonStyleDisplay = () => {
        const { buttonStyle } = this.props;
        if (buttonStyle === 0) {
            return <this.buttonStyle0 />
        } else if (buttonStyle === 1) {
            return <this.buttonStyle1 />
        } else {
            return <this.buttonStyle2 />
        }
    };

    // Button style for signup in welcome page
    buttonStyle1 = () => {
        const { buttonFunc, buttonText } = this.props;
        return (
            <TouchableOpacity onPress={()=>this.decideButtonAction(buttonFunc)}>
                <View style={[styles.welcomeSignInSpec, styles.whiteView, {marginTop:20}]}>
                    <Text style={[styles.greenButtonSpec, styles.textColorGreen]}>{buttonText}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    // Button style for login in welcome page
    buttonStyle0 = () => {
        const { buttonFunc, buttonText } = this.props;
        return (
            <TouchableOpacity onPress={()=>this.decideButtonAction(buttonFunc)}>
                <View style={[styles.welcomeSignInSpec, styles.robinGreenColor]}>
                    <Text style={[styles.greenButtonSpec, styles.textColorWhite]}>{buttonText}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    // Button style for login page
    buttonStyle2 = () => {
        const { buttonFunc, buttonText } = this.props;
        return (
            <TouchableOpacity onPress={()=>this.decideButtonAction(buttonFunc)}>
                <View style={styles.buttonSpec}>
                    <Text style={styles.buttonTextSpec}>{buttonText}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    decideButtonAction = (func) => {
        if (typeof func == 'string' && func.includes('Page')) {
            return this.props.navigation.navigate(func);
        } else {
            return func();
        }
    };

    render() {
        return (
            <this.buttonStyleDisplay />
        );
    }
};

export default withNavigation(Button);