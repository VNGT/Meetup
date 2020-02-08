
import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

export default StyleSheet.create({
	topSafe: {
		flex: 0,
		backgroundColor: '#21CD99',
	},
	bottomSafe: {
		flex: 1,
		backgroundColor: '#C3C3C3',
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
		marginTop: 10,
		marginLeft: 15,
		color: 'black',
	},
});