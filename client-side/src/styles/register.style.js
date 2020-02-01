import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

export default StyleSheet.create({
	text: {
		fontSize: 20,
		marginTop: 30,
		marginLeft: (Dimensions.width - (Dimensions.width / 1.3)) / 2,
	},

	textInput: {
		marginTop: 10,
		marginLeft: (Dimensions.width - (Dimensions.width / 1.3)) / 2,
		borderColor: 'gray',
		height: 35,
		width: Dimensions.width / 1.3,
		borderWidth: 1,
		textAlign: 'left'
	},
	
	title: {
		fontSize: 40,
		marginTop: 50,
		textAlign: 'center',
	},

	button: {
		marginTop: 40,
		

	}
});