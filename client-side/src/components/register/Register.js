import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, SafeAreaView, StatusBar, Button, Alert, TouchableOpacity } from 'react-native';
import glStyles from '../../styles/global.style';
import registerStyles from '../../styles/register.style';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			phoneNumber: '',
			email: '',
			name: '',
			major: '',
			password: '',
			confirmPassword: ''
		};
	}

	inputView = () => {
		return (
			<ScrollView>
				<Text style={registerStyles.text}>Phone Number</Text>
				<TextInput
					style={registerStyles.textInput}
					onChangeText={(phoneNumber) => this.setState({phoneNumber})}
					placeholder={'Phone number'}
				/>

				<Text style={registerStyles.text}>Email</Text>
				<TextInput
					style={registerStyles.textInput}
					onChangeText={(email) => this.setState({email})}
					placeholder={'Password'}
				/>

				<Text style={registerStyles.text}>Full Name</Text>
				<TextInput
					style={registerStyles.textInput}
					onChangeText={(name) => this.setState({name})}
					placeholder={'Name'}
				/>

				<Text style={registerStyles.text}>Major</Text>
				<TextInput
					style={registerStyles.textInput}
					onChangeText={(major) => this.setState({major})}
					placeholder={'Major'}
				/>

				<Text style={registerStyles.text}>Password</Text>
				<TextInput
					secureTextEntry={true}
					style={registerStyles.textInput}
					onChangeText={(password) => this.setState({password})}
					placeholder={'Password'}
				/>

				<Text style={registerStyles.text}>Confirm Password</Text>
				<TextInput
					secureTextEntry={true}
					style={registerStyles.textInput}
					onChangeText={(confirmPassword) => this.setState({confirmPassword})}
					placeholder={'Confirm Password'}
				/>
			</ScrollView>
		);
	};

	titleView = () => {
		return (
			<View>
				<Text style={registerStyles.title}>Register</Text>
			</View>
		);
	}
	
	registerButton = () => {
		return (
			<View>
				<TouchableOpacity
					style={registerStyles.button}>
					<Button
						title='Register'
						color='white'
						onPress={this.registerButtonHandler}
					/>
				</TouchableOpacity>
			</View>
		);
	}

	registerButtonHandler = () => {
		const { password, confirmPassword } = this.state;
		if (password.length < 6) {
			Alert.alert('Password must have at least 6 characters');
		} else if (password !== confirmPassword) {
			Alert.alert('Password and Confirm Password do not match');
		} else {
			// Call database
		}
	}

	render() {
		return (
			<View>
				<SafeAreaView style={glStyles.whiteTopSafe}/>
				<SafeAreaView style={glStyles.whiteBottomSafe}>
					<StatusBar barStyle='dark-content'/>
					<this.titleView/>
					<this.inputView/>
					<this.registerButton/>
				</SafeAreaView>
			</View>
		);
	}
}