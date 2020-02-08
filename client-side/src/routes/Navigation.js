import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Reset from '../components/login/Reset';
import Login from '../components/login/Login';
import Welcome from '../components/login/Welcome';

const RootStack = createStackNavigator(
	{
		LoginPage: Login,
		ResetPasswordPage: Reset,
		WelcomePage: Welcome
	},
	{
		initialRouteName: 'WelcomePage'
	}
);

export default createAppContainer(RootStack);