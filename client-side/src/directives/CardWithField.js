import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/card.style.js';
import TEXT from '../constants/en_US';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont(); // Load the font
import { Item } from 'native-base';
import Button from '../directives/Button';
const verifyChangeIcon = '../styles/assets/verified.png';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { userLogin, userSignup } from '../actions/userActions';

class CardWithField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fullName: '',
            repeatPassword: '',
        };
    };

    // EventFire dectect when keyboard onChange
    onChangeText = (name, text) => {
        this.setState({[name] : text});
    };

    // Field input list generators
    fieldInputListGenerator = (items) => {
        let lists = [];
        for (let i = 0; i < items.length; i++) {
            const currentItem = items[i];
            if (i <= 0) {
                lists.push(
                    <Item key={i} style={[styles.inputItemSpec, {marginTop: 35}]}>
                        <Icon style={styles.fieldIcon} name={currentItem.icon}/>
                        <TextInput style={styles.textInputSpec} placeholder={currentItem.text}
                            onChangeText={text => this.onChangeText(currentItem.name, text)}
                            secureTextEntry={currentItem.icon == 'lock'}
                        />
                    </Item>
                );
                continue;
            }
            lists.push(
                <Item key={i} style={styles.inputItemSpec}>
                    <Icon style={styles.fieldIcon} name={currentItem.icon}/>
                    <TextInput style={styles.textInputSpec} placeholder={currentItem.text}
                        onChangeText={text => this.onChangeText(currentItem.name, text)}
                        secureTextEntry={currentItem.icon == 'lock'}
                    />
                </Item>
            );
        }
        return lists;
    };

    // Login Page View
    loginInputField = (lists) => {
        const { loginError } = this.props;
        return (
            <View>
                {this.fieldInputListGenerator(lists)}
                <Text style={styles.errorMessage}>{loginError}</Text>
                {this.whichButton(2, TEXT.LOGIN.BUTTON_NAME, this.loginLogic)}
                <TouchableOpacity>
                    <Text style={styles.forgetPasswordSpec}>{TEXT.LOGIN.FORGOT_PASS}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    // Main logic to login
    loginLogic = () => {
        const { navigation, userLogin } = this.props;
        const { email, password } = this.state;
        userLogin(email, password, navigation);
    }

    // Main welcome card view
    welcomeViewCard = () => {
        return (
            <View>
                <Text style={styles.welcomeTitleSpec}>{TEXT.WELCOME.TITLE}</Text>
                <Text style={styles.welcomeSubTitleSpec}>{TEXT.WELCOME.SUBTITLE}</Text>
                {this.whichButton(0, TEXT.WELCOME.LOGIN, 'LoginPage')}
                {this.whichButton(1, TEXT.WELCOME.SIGN_UP, 'SignupPage')}
                <View style={{marginBottom: 35}} />
            </View>
        );
    };

    // Sign up view with input field
    signupListView = (lists) => {
        const { errorMessage } = this.props;
        return (
            <View>
                {this.fieldInputListGenerator(lists)}
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                {this.whichButton(2, TEXT.SIGN_UP.BUTTON, this.signupLogic)}
            </View>
        );
    };

    // Signup main logic
    signupLogic = () => {
        const { email, password, fullName, repeatPassword } = this.state;
        const { navigation, userSignup } = this.props;

        // Get out first and last name
        const splitName = fullName.split(' ');
        const firstName = splitName[0], lastName = splitName[1];

        userSignup(email, firstName, lastName, password, navigation);
    };

    profileDetailsView = (lists) => {
        return (
            <View>
                {this.fieldInputListGenerator(lists)}
                {this.whichButton(0, TEXT.PROFILE.BUTTON, 'saveData')}
            </View>
        );
    };

    resetPasswordVerifyEmail = (lists) => {
        return (
            <View>
                {this.fieldInputListGenerator(lists)}
                {this.whichButton(2, TEXT.FORGET_PASS.VERIFY_BUTTON, 'verifyEmail')}
            </View>
        );
    }

    enterPasswordField = (lists) => {
        return (
            <View>
                {this.fieldInputListGenerator(lists)}
                {this.whichButton(2, TEXT.FORGET_PASS.RECOVER_BUTTON, 'changePasscode')}
            </View>
        );
    };

    verifyPasswordView = () => {
        return (
            <View>
                <Text style={styles.verifyPasscodeTextTitle}>{TEXT.FORGET_PASS.PASSWORD_CHANGED}</Text>
                <Text style={styles.verifyPasscodeSubtitle}>{TEXT.FORGET_PASS.CONGRATS}</Text>
                <Image style={styles.verifyIconSpec} source={require(verifyChangeIcon)} />
                {this.whichButton(2, TEXT.FORGET_PASS.BACK_LOGIN, 'LoginPage')}
            </View>
        );
    };

    whichButton = (styleNumber, text, func) => (
        <Button
            buttonStyle={styleNumber}
            buttonText={text}
            buttonFunc={func}
        />
    );

    // Decide which input field to display
    whichInputToRender = () => {
        switch(this.props.setCard) {
            case 1:
                return <this.welcomeViewCard />
            case 2:
                return <View>
                    {this.loginInputField(fields.login)}
                </View>
            case 3:
                return <View>
                    {this.signupListView(fields.sign_up)}
                </View>
            case 4:
                return <View>
                    {this.resetPasswordVerifyEmail(fields.reset_pass)}
                </View>
            case 5:
                return <View>
                    {this.enterPasswordField(fields.enter_pass)}
                </View>
            case 6:
                return <this.verifyPasswordView />
            case 7:
                return <View>
                    {this.profileDetailsView(fields.profile_details)}
                </View>
        }
    };

    render() {
        return (
            <View style={styles.cardView}>
                <this.whichInputToRender />
            </View>
        );
    }
};

// constant field inputs metadata
const fields = {
    'login': [
        {icon: 'email', text: TEXT.LOGIN.EMAIL, name: 'email'},
        {icon: 'lock', text: TEXT.LOGIN.PASSWORD, name: 'password'}
    ],
    'sign_up': [
        {icon: 'email', text: TEXT.SIGN_UP.EMAIL, name: 'email'},
        {icon: 'person', text: TEXT.SIGN_UP.FULL_NAME, name: 'fullName'},
        {icon: 'lock', text: TEXT.SIGN_UP.PASSWORD, name: 'password'},
        {icon: 'lock', text: TEXT.SIGN_UP.REPEAT_PASS, name: 'repeatPassword'}
    ],
    'profile_details': [
        {text: TEXT.PROFILE.FIRST_NAME, value: 'Chau'},
        {text: TEXT.PROFILE.LAST_NAME},
        {text: TEXT.PROFILE.EMAIL},
        {text: TEXT.PROFILE.MAJOR},
    ],
    'reset_pass': [
        {icon: 'email', text: TEXT.FORGET_PASS.EMAIL}
    ],
    'enter_pass': [
        {icon: 'lock', text: TEXT.SIGN_UP.PASSWORD},
        {icon: 'lock', text: TEXT.SIGN_UP.REPEAT_PASS}
    ]
};

// Get new item from state
const mapStateToProps = state => ({
    errorMessage: state.userReducer.errorMessage,
    loginError: state.userReducer.loginError
});

const mapDispatchToProps = {
    userLogin,
    userSignup
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(CardWithField));