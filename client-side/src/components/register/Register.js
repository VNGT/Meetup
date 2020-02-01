import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, SafeAreaView, StatusBar, Button, Alert, TouchableOpacity } from 'react-native';
import glStyles from '../../styles/global.style';
import registerStyles from '../../styles/register.style';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			phoneNumber: 'xxxxxxxxxx',
			email: 'email@gmail.com',
			name: 'John Doe',
			major: 'Major',
			password: 'Password',
			confirmPassword: 'Confirm Password'
		};
	}

	inputView = () => {
		return (
			<ScrollView>
				<Text style={registerStyles.text}>Phone Number</Text>
				<TextInput
					style={registerStyles.textInput}
					onChangeText={(phoneNumber) => this.setState({phoneNumber})}
					placeholder={this.state.phoneNumber}
				/>

				<Text style={registerStyles.text}>Email</Text>
				<TextInput
					style={registerStyles.textInput}
					onChangeText={(email) => this.setState({email})}
					placeholder={this.state.email}
				/>

				<Text style={registerStyles.text}>Full Name</Text>
				<TextInput
					style={registerStyles.textInput}
					onChangeText={(name) => this.setState({name})}
					placeholder={this.state.name}
				/>

				<Text style={registerStyles.text}>Major</Text>
				<TextInput
					style={registerStyles.textInput}
					onChangeText={(major) => this.setState({major})}
					placeholder={this.state.major}
				/>

				<Text style={registerStyles.text}>Password</Text>
				<TextInput
					secureTextEntry={true}
					style={registerStyles.textInput}
					onChangeText={(password) => this.setState({password})}
					placeholder={this.state.password}
				/>

				<Text style={registerStyles.text}>Confirm Password</Text>
				<TextInput
					secureTextEntry={true}
					style={registerStyles.textInput}
					onChangeText={(confirmPassword) => this.setState({confirmPassword})}
					placeholder={this.state.confirmPassword}
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
						onPress={() => Alert.alert('User registered')}
					/>
				</TouchableOpacity>
			</View>
		);
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