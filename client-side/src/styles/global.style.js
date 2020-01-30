import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';
import backButton from '../directives/backButton';

export default StyleSheet.create({
	topSafe: {
		flex: 0,
		backgroundColor: 'white',
	},
	bottomSafe: {
		flex: 1,
		backgroundColor: 'white',
	},
	mainView: {
		flex: 1,
		backgroundColor: 'white',
	},
	centerText: {
		textAlign: 'center',
	},
	headerText: {
		fontSize: 45,
		fontWeight: '700',
		textAlign: 'center',
		marginTop: 15,
	},
	subtitleText: {
		color: 'gray',
		textAlign: 'center',
	},
	backButton: {
		fontSize: 40,
		marginLeft: 8,
		color: 'black',
	},
});