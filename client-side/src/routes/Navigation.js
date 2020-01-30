import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Reset from '../components/reset_password/Reset';
// import Login from '../components/login/login';

const RootStack = createStackNavigator(
	{
		ResetPasswordPage: Reset
		// More pages go here
	},
	{
		// Route call when page load
		initialRouteName: 'ResetPasswordPage'
	}
);

export default createAppContainer(RootStack);