import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/login.style';
import TEXT from '../constants/en_US';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont(); // Load the font
import { Item } from 'native-base';
const facebookImg = '../styles/assets/facebook.png';
const googleImg = '../styles/assets/google.png';

export default class CardWithField extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    };

    // Submit button view
    submitButton = () => (
        <TouchableOpacity>
            <View style={styles.buttonSpec}>
                <Text style={styles.buttonTextSpec}>{TEXT.LOGIN.BUTTON_NAME}</Text>
            </View>
        </TouchableOpacity>
    );

    // Forget password text view
    forgetPasswordText = () => (
        <TouchableOpacity>
            <Text style={styles.forgetPasswordSpec}>{TEXT.LOGIN.FORGOT_PASS}</Text>
        </TouchableOpacity>
    );

    // Login Page input field
    loginInputField = () => {
        return (
            <View>
                <Item style={[styles.inputItemSpec, {marginTop: 35}]}>
                    <Icon style={styles.fieldIcon} name='email'/>
                    <TextInput style={styles.textInputSpec} placeholder={TEXT.LOGIN.EMAIL}/>
                </Item>
                <Item style={styles.inputItemSpec}>
                    <Icon style={styles.fieldIcon} name='lock'/>
                    <TextInput style={styles.textInputSpec} placeholder={TEXT.LOGIN.PASSWORD}/>
                </Item>
                <this.submitButton />
                <this.forgetPasswordText />
            </View>
        );
    };

    welcomeViewCard = () => {
        return (
            <View>
                <Text style={styles.welcomeTitleSpec}>{TEXT.WELCOME.TITLE}</Text>
                <Text style={styles.welcomeSubTitleSpec}>{TEXT.WELCOME.SUBTITLE}</Text>

                <TouchableOpacity>
                    <View style={[styles.welcomeSignInSpec, styles.robinGreenColor]}>
                        <Text style={[styles.greenButtonSpec, styles.textColorWhite]}>{TEXT.WELCOME.LOGIN}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[styles.welcomeSignInSpec, styles.whiteView, {marginTop:20}]}>
                        <Text style={[styles.greenButtonSpec, styles.textColorGreen]}>{TEXT.WELCOME.SIGN_UP}</Text>
                    </View>
                </TouchableOpacity>

                <Text style={styles.welcomeOrService}>{TEXT.WELCOME.OR}</Text>

                <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 25}}>
                    <TouchableOpacity style={styles.serviceImgMargin}
                        onPress={this.connectWithFb}>
                        <Image style={styles.serviceImg} source={require(facebookImg)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.serviceImgMargin}
                        onPress={this.connectWithGg}>
                        <Image style={styles.serviceImg} source={require(googleImg)} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    // Decide which input field to display
    whichInputToRender = () => {
        let stage = null;
        switch(this.props.setCard) {
            case 1:
                stage = <this.welcomeViewCard />
                break;
            case 2:
                stage = <this.loginInputField/>;
                break;
        }

        return stage;
    };

    render() {
        return (
            <View style={styles.cardView}>
                <this.whichInputToRender />
            </View>
        );
    }
};