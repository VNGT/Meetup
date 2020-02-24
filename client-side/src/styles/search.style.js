import { StyleSheet } from 'react-native';
import Dimensions from '../services/Dimensions';

export default StyleSheet.create({
	view: {
		flex: 1,
		backgroundColor: 'white'
	},
	searchField: {
		marginTop: 20,
		flexDirection: 'row',
	},
	textInput: {
		height: Dimensions.height / 20,
		width: Dimensions.width / 6 * 5,
		marginLeft: '5%'
	},
	title: {
		marginTop: '10%',
		fontWeight: 'bold',
		fontSize: 50,
		marginLeft: '7%'
	},
	recentSearch: {
		marginTop: '10%',
		fontWeight: 'bold',
		fontSize: 20,
		marginLeft: '7%'
	},
	recentList: {
		marginTop: '5%',
		fontSize: 15,
		marginLeft: '7%',
		borderTopColor: 'black',
		marginVertical: 8,
		marginHorizontal: 16,
	},
	recentItem: {
		fontSize: 15,
		padding: 10
	}

});