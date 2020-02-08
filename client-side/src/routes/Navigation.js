import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Reset from '../components/login/Reset';
import Login from '../components/login/Login';
import Welcome from '../components/login/Welcome';
import Signup from '../components/login/Signup';
import ResetPassword from '../components/login/ResetPassword';
import PasswordVerified from '../components/login/PasswordVerified';

const RootStack = createStackNavigator(
	{
		LoginPage: Login,
		EnterPasswordPage: Reset,
		WelcomePage: Welcome,
		SignupPage: Signup,
		ResetPasswordPage: ResetPassword,
		PasswordVerifyPage: PasswordVerified
	},
	{
		initialRouteName: 'WelcomePage'
	}
);

export default createAppContainer(RootStack);