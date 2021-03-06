import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../components/Login';
import Welcome from '../components/Welcome';
import Signup from '../components/Register';
import ResetPassword from '../components/ResetPassword';
import Reset from '../components/ResetPassword/ResetNewPass/';
import PasswordVerified from '../components/ResetPassword/ResetVerify';
import Dashboard from '../components/Dashboard';
import Search from '../components/Search';
import Profile from '../components/Profile';
import SearchDetail from '../components/SearchDetail';
import EventDetail from '../components/EventDetail';

const RootStack = createStackNavigator(
	{
		LoginPage: Login,
		WelcomePage: Welcome,
		SignupPage: Signup,
		EnterPasswordPage: ResetPassword,
		EnterNewPasswordPage: Reset,
		PasswordVerifyPage: PasswordVerified,
		DashboardPage: Dashboard,
		SearchPage: Search,
		ProfilePage: Profile,
		SearchDetailPage: SearchDetail,
		EventDetailPage: EventDetail,
	},
	{
		initialRouteName: 'WelcomePage',
	}
);

export default createAppContainer(RootStack);