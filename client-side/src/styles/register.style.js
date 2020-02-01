import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

export default StyleSheet.create({
	text: {
		fontSize: 20,
		marginTop: 30,
		marginLeft: (Dimensions.width - (Dimensions.width / 1.3)) / 2,
	},

	textInput: {
		marginTop: 8,
		marginLeft: (Dimensions.width - (Dimensions.width / 1.3)) / 2,
		borderColor: 'gray',
		height: 35,
		width: Dimensions.width / 1.3,
		borderWidth: 1,
		textAlign: 'left',
		borderRadius: 5
	},
	
	title: {
		fontSize: 40,
		marginTop: 50,
		textAlign: 'center',
	},

	button: {
		marginTop: 30,
		backgroundColor: 'black',
		borderRadius: 40,
		height: 40,
		width: Dimensions.width / 2,
		marginLeft: (Dimensions.width - Dimensions.width / 2) / 2
	},

	buttonDisabled: {
		marginTop: 30,
		backgroundColor: '#dadad8',
		borderRadius: 40,
		height: 40,
		width: Dimensions.width / 2,
		marginLeft: (Dimensions.width - Dimensions.width / 2) / 2
	},

	helperText: {
		marginLeft: ((Dimensions.width - (Dimensions.width / 1.3)) / 2) - 10
	}
});