import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/button.style';
import { withNavigation } from 'react-navigation';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    buttonStyleDisplay = () => {
        if (this.props.buttonStyle === 0) {
            return <this.buttonStyle0 />
        } else if (this.props.buttonStyle === 1) {
            return <this.buttonStyle1 />
        } else {
            return <this.buttonStyle2 />
        }
    };

    // Button style for signup in welcome page
    buttonStyle1 = () => (
        <TouchableOpacity onPress={()=>this.decideButtonAction(this.props.buttonFunc)}>
            <View style={[styles.welcomeSignInSpec, styles.whiteView, {marginTop:20}]}>
                <Text style={[styles.greenButtonSpec, styles.textColorGreen]}>{this.props.buttonText}</Text>
            </View>
        </TouchableOpacity>
    );

    // Button style for login in welcome page
    buttonStyle0 = () => (
        <TouchableOpacity onPress={()=>this.decideButtonAction(this.props.buttonFunc)}>
            <View style={[styles.welcomeSignInSpec, styles.robinGreenColor]}>
                <Text style={[styles.greenButtonSpec, styles.textColorWhite]}>{this.props.buttonText}</Text>
            </View>
        </TouchableOpacity>
    );

    // Button style for login page
    buttonStyle2 = () => (
        <TouchableOpacity onPress={()=>this.decideButtonAction(this.props.buttonFunc)}>
            <View style={styles.buttonSpec}>
                <Text style={styles.buttonTextSpec}>{this.props.buttonText}</Text>
            </View>
        </TouchableOpacity>
    );

    decideButtonAction = (func) => {
        if (typeof func == 'string' && func.includes('Page')) {
            return this.props.navigation.navigate(func);
        } else {
            func();
            return null;
        }
    };

    render() {
        return (
            <this.buttonStyleDisplay />
        );
    }
};

export default withNavigation(Button);